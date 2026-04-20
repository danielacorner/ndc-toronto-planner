import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar as CalendarIcon, 
  Search, 
  Plus, 
  Trash2, 
  Info, 
  Sparkles, 
  Clock, 
  MapPin, 
  User, 
  ChevronRight,
  BookOpen,
  X
} from 'lucide-react';
import { SESSIONS, DAYS, Session } from '@/src/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { GoogleGenAI } from "@google/genai";
import { cn } from "@/lib/utils";

const getAi = () => {
  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    console.warn("GEMINI_API_KEY is missing. AI Smart Planner will be disabled.");
    return null;
  }
  return new GoogleGenAI({ apiKey: key });
};

const ai = getAi();

export default function SchedulePlanner() {
  const [selectedDay, setSelectedDay] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [mySchedule, setMySchedule] = useState<string[]>([]);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiPrompt, setAiPrompt] = useState('');
  const [activeSession, setActiveSession] = useState<Session | null>(null);

  // Load schedule from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('ndc_schedule');
    if (saved) {
      setMySchedule(JSON.parse(saved));
    }
  }, []);

  // Save schedule to localStorage
  useEffect(() => {
    localStorage.setItem('ndc_schedule', JSON.stringify(mySchedule));
  }, [mySchedule]);

  const toggleSession = (id: string) => {
    setMySchedule(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const filteredSessions = SESSIONS.filter(s => 
    s.day === selectedDay && 
    (s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     s.track.toLowerCase().includes(searchQuery.toLowerCase()) ||
     s.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  const mySessionsForDay = SESSIONS.filter(s => s.day === selectedDay && mySchedule.includes(s.id));

  const handleAiPlan = async () => {
    if (!aiPrompt.trim() || !ai) {
      if (!ai) alert("AI Planning is disabled because the GEMINI_API_KEY is not configured.");
      return;
    }
    setAiLoading(true);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Based on the following NDC Toronto 2026 sessions, suggest a schedule for someone interested in: "${aiPrompt}". 
        Return ONLY a comma-separated list of session IDs from the provided data.
        
        Sessions Data:
        ${JSON.stringify(SESSIONS.map(s => ({ id: s.id, title: s.title, track: s.track, tags: s.tags })))}`,
      });

      const suggestedIds = response.text?.split(',').map(id => id.trim()) || [];
      const validIds = suggestedIds.filter(id => SESSIONS.some(s => s.id === id));
      
      if (validIds.length > 0) {
        setMySchedule(prev => Array.from(new Set([...prev, ...validIds])));
        setAiPrompt('');
      }
    } catch (error) {
      console.error("AI Planning Error:", error);
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#E4E3E0] text-[#141414] font-sans selection:bg-[#141414] selection:text-[#E4E3E0]">
      {/* Header */}
      <header className="border-b border-[#141414] p-4 md:p-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-none">
            NDC <span className="text-stroke-1 text-transparent" style={{ WebkitTextStroke: '1px #141414' }}>{'{'} Toronto {'}'}</span>
          </h1>
          <p className="font-mono text-[10px] md:text-xs mt-2 opacity-60 uppercase tracking-widest">Conference Planner 2026 • May 5-8 • Westin Harbour Castle</p>
        </div>
        <div className="flex items-center w-full md:w-auto">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40" />
            <Input 
              placeholder="SEARCH SESSIONS..." 
              className="pl-10 bg-transparent border-[#141414] rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:opacity-30 uppercase font-mono text-xs w-full md:w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-[1fr_400px] min-h-[calc(100vh-140px)] overflow-x-hidden">
        {/* Left Column: Schedule & Discovery */}
        <div className="border-b lg:border-b-0 lg:border-r border-[#141414] p-4 md:p-6 w-full">
          <Tabs defaultValue="discovery" className="w-full flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 w-full">
              <TabsList className="bg-transparent border border-[#141414] rounded-none p-0 h-auto w-full sm:w-auto">
                <TabsTrigger 
                  value="discovery" 
                  className="rounded-none data-[state=active]:bg-[#141414] data-[state=active]:text-[#E4E3E0] px-4 md:px-6 py-2 font-mono text-[10px] md:text-xs uppercase tracking-widest flex-1 sm:flex-none"
                >
                  Discovery
                </TabsTrigger>
                <TabsTrigger 
                  value="my-schedule" 
                  className="rounded-none data-[state=active]:bg-[#141414] data-[state=active]:text-[#E4E3E0] px-4 md:px-6 py-2 font-mono text-[10px] md:text-xs uppercase tracking-widest flex-1 sm:flex-none"
                >
                  My Schedule ({mySchedule.length})
                </TabsTrigger>
              </TabsList>

              <div className="flex gap-1 overflow-x-auto pb-2 sm:pb-0 no-scrollbar w-full sm:w-auto">
                {DAYS.map(day => (
                  <Button
                    key={day.id}
                    onClick={() => setSelectedDay(day.id)}
                    className={cn(
                      "rounded-none border border-[#141414] font-mono text-[10px] md:text-xs uppercase px-3 md:px-4 h-8 md:h-9 flex-shrink-0 transition-colors duration-150",
                      selectedDay === day.id 
                        ? "bg-[#141414] text-[#E4E3E0] hover:bg-[#141414] hover:text-[#E4E3E0]" 
                        : "bg-transparent text-[#141414] hover:bg-[#141414] hover:text-[#E4E3E0]"
                    )}
                  >
                    {day.label}
                  </Button>
                ))}
              </div>
            </div>

            <TabsContent value="discovery" className="mt-0 outline-none w-full flex-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#141414] border border-[#141414] w-full">
                {filteredSessions.map(session => (
                  <SessionItem 
                    key={session.id} 
                    session={session} 
                    isSelected={mySchedule.includes(session.id)}
                    onToggle={() => toggleSession(session.id)}
                    onView={() => setActiveSession(session)}
                  />
                ))}
                {filteredSessions.length === 0 && (
                  <div className="col-span-full bg-[#E4E3E0] p-12 text-center font-mono opacity-40 uppercase text-sm">
                    No sessions found for this day or search query.
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="my-schedule" className="mt-0 outline-none w-full flex-none">
              <div className="space-y-px bg-[#141414] border border-[#141414] w-full">
                {mySessionsForDay.length > 0 ? (
                  mySessionsForDay.sort((a,b) => a.startTime.localeCompare(b.startTime)).map(session => (
                    <SessionItem 
                      key={session.id} 
                      session={session} 
                      isSelected={true}
                      onToggle={() => toggleSession(session.id)}
                      onView={() => setActiveSession(session)}
                      compact
                    />
                  ))
                ) : (
                  <div className="bg-[#E4E3E0] p-12 text-center font-mono opacity-40 uppercase text-sm">
                    Your schedule for {DAYS.find(d => d.id === selectedDay)?.date} is empty.
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Column: Utilities & AI */}
        <aside className="p-6 flex flex-col gap-8 bg-[#DEDDDA]">
          {/* AI Planner */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4" />
              <h2 className="font-mono text-xs font-bold uppercase tracking-widest">AI Smart Planner</h2>
            </div>
            <Card className="rounded-none border-[#141414] bg-transparent shadow-none">
              <CardContent className="p-4 space-y-4">
                <p className="text-xs opacity-70 leading-relaxed">
                  Tell Gemini what you're interested in, and it will automatically add relevant sessions to your schedule.
                </p>
                <div className="space-y-2">
                  <textarea 
                    placeholder="E.G. 'I WANT TO LEARN ABOUT AI AGENTS AND .NET PERFORMANCE'..."
                    className="w-full min-h-[100px] p-3 bg-white/50 border border-[#141414] rounded-none focus:outline-none font-mono text-xs uppercase placeholder:opacity-30 resize-none"
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                  />
                  <Button 
                    className="w-full rounded-none bg-[#141414] text-[#E4E3E0] hover:bg-[#141414]/90 font-mono text-xs uppercase h-10"
                    onClick={handleAiPlan}
                    disabled={aiLoading || !aiPrompt.trim()}
                  >
                    {aiLoading ? 'PLANNING...' : 'GENERATE SCHEDULE'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="bg-[#141414] opacity-20" />

          {/* Quick Stats */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Info className="w-4 h-4" />
              <h2 className="font-mono text-xs font-bold uppercase tracking-widest">Schedule Stats</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-[#141414] p-4 flex flex-col items-center justify-center">
                <span className="text-3xl font-black">{mySchedule.length}</span>
                <span className="font-mono text-[10px] opacity-60 uppercase">Sessions</span>
              </div>
              <div className="border border-[#141414] p-4 flex flex-col items-center justify-center">
                <span className="text-3xl font-black">{new Set(SESSIONS.filter(s => mySchedule.includes(s.id)).map(s => s.track)).size}</span>
                <span className="font-mono text-[10px] opacity-60 uppercase">Tracks</span>
              </div>
            </div>
          </section>

          <Separator className="bg-[#141414] opacity-20" />

          {/* Venue Info */}
          <section className="mt-auto">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4" />
              <h2 className="font-mono text-xs font-bold uppercase tracking-widest">Venue Details</h2>
            </div>
            <div className="font-mono text-[10px] space-y-2 opacity-70 uppercase leading-relaxed">
              <p>The Westin Harbour Castle</p>
              <p>1 Harbour Square, Toronto, ON M5J 1A6</p>
              <p>Main Hall: Floor 2</p>
              <p>Workshops: Floor 3</p>
            </div>
          </section>
        </aside>
      </main>

      {/* Session Detail Dialog */}
      <Dialog open={!!activeSession} onOpenChange={(open) => !open && setActiveSession(null)}>
        <DialogContent 
          className="rounded-none border-[#141414] bg-[#E4E3E0] max-w-2xl p-0 overflow-hidden max-h-[90vh] flex flex-col"
          showCloseButton={false}
        >
          {activeSession && (
            <div className="flex flex-col overflow-y-auto">
              {/* Header - Stays at top sticky */}
              <div className="bg-[#141414] text-[#E4E3E0] p-8 sticky top-0 z-10">
                <div className="flex justify-between items-start mb-4">
                  <Badge className="rounded-none bg-[#E4E3E0] text-[#141414] font-mono text-[10px] uppercase">
                    {activeSession.track}
                  </Badge>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setActiveSession(null)}
                    className="text-[#E4E3E0] hover:bg-white/10"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tighter leading-tight mb-4">
                  {activeSession.title}
                </h2>
                <div className="flex flex-wrap gap-4 font-mono text-xs uppercase opacity-80">
                  <div className="flex items-center gap-2">
                    <User className="w-3 h-3" /> {activeSession.speaker}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3" /> {activeSession.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-3 h-3" /> DAY {activeSession.day}
                  </div>
                </div>
              </div>
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="font-mono text-xs font-bold uppercase tracking-widest mb-2 opacity-40">Description</h3>
                  <p className="text-sm leading-relaxed">{activeSession.description}</p>
                </div>
                <div>
                  <h3 className="font-mono text-xs font-bold uppercase tracking-widest mb-2 opacity-40">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {activeSession.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="rounded-none border-[#141414] font-mono text-[10px] uppercase">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="pt-4">
                  <Button 
                    className={`w-full rounded-none font-mono text-xs uppercase h-12 ${mySchedule.includes(activeSession.id) ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-[#141414] text-[#E4E3E0] hover:bg-[#141414]/90'}`}
                    onClick={() => toggleSession(activeSession.id)}
                  >
                    {mySchedule.includes(activeSession.id) ? 'Remove from Schedule' : 'Add to Schedule'}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function SessionItem({ 
  session, 
  isSelected, 
  onToggle, 
  onView,
  compact = false 
}: { 
  session: Session; 
  isSelected: boolean; 
  onToggle: () => void; 
  onView: () => void;
  compact?: boolean;
}) {
  return (
    <div 
      className={`group relative bg-[#E4E3E0] p-4 md:p-6 transition-all duration-200 cursor-pointer hover:bg-[#141414] hover:text-[#E4E3E0] ${isSelected ? 'border-l-4 border-l-[#141414] group-hover:border-l-[#E4E3E0]' : ''}`}
      onClick={onView}
    >
      <div className="flex justify-between items-start gap-4">
        <div className="space-y-2 min-w-0 flex-1">
          <div className="flex items-center gap-2 font-mono text-[9px] md:text-[10px] uppercase opacity-60 group-hover:opacity-80">
            <span className="whitespace-nowrap">{session.time}</span>
            <span>•</span>
            <span className="truncate">{session.track}</span>
          </div>
          <h3 className={`font-bold uppercase tracking-tight leading-tight break-words ${compact ? 'text-base md:text-lg' : 'text-lg md:text-xl'}`}>
            {session.title}
          </h3>
          {!compact && (
            <p className="text-[10px] md:text-xs opacity-60 group-hover:opacity-80 font-medium truncate">{session.speaker}</p>
          )}
        </div>
        <Button
          size="icon"
          variant="ghost"
          className="rounded-none border border-current md:opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
        >
          {isSelected ? <Trash2 className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </Button>
      </div>
      
      {isSelected && !compact && (
        <div className="absolute top-1 right-1 md:top-2 md:right-2">
          <Badge className="rounded-none bg-[#141414] text-[#E4E3E0] group-hover:bg-[#E4E3E0] group-hover:text-[#141414] font-mono text-[7px] md:text-[8px] uppercase">Scheduled</Badge>
        </div>
      )}
    </div>
  );
}
