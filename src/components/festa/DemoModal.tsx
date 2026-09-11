import type { InvitationDesign } from "@/data/festa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { FestaButton } from "./primitives";
import { PhoneFrame } from "./PhoneFrame";

/**
 * Live demo preview.
 * Loads `design.demoUrl` inside a phone-frame iframe so visitors can scroll and
 * interact with the real invitation. Falls back to opening the link in a new
 * tab if the site blocks embedding.
 */
export function DemoModal({
  design,
  onClose,
}: {
  design: InvitationDesign | null;
  onClose: () => void;
}) {
  return (
    <Dialog open={Boolean(design)} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="flex max-h-[90vh] max-w-lg flex-col gap-0 rounded-sm border-border bg-ivory p-0">
        {design ? (
          <>
            <div className="flex-1 overflow-y-auto p-6 sm:p-7">
              <DialogHeader className="space-y-3 text-left">
                <p className="eyebrow text-gold">{design.category}</p>
                <DialogTitle className="font-serif text-2xl text-burgundy-deep">
                  {design.name}
                </DialogTitle>
                <DialogDescription className="text-[0.9rem] leading-relaxed text-muted-foreground">
                  {design.description}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6 flex justify-center">
                <PhoneFrame
                  title={design.name}
                  poster={design.image}
                  demoUrl={design.demoUrl ?? undefined}
                  className="max-w-60 sm:max-w-64"
                />
              </div>

              {design.demoUrl && (
                <a
                  href={design.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block text-center text-sm text-burgundy underline underline-offset-4"
                >
                  დემოს ახალ ჩანართში გახსნა
                </a>
              )}
            </div>

            <div className="border-t border-border/70 p-4 sm:p-6">
              <FestaButton onClick={onClose} className="w-full">
                დახურვა
              </FestaButton>
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
