/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import SchedulePlanner from './components/SchedulePlanner';
import { TooltipProvider } from "@/components/ui/tooltip";

export default function App() {
  return (
    <TooltipProvider>
      <SchedulePlanner />
    </TooltipProvider>
  );
}
