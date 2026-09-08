import type { InvitationDesign } from "@/data/festa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { FestaButton } from "./primitives";

/**
 * Placeholder demo preview.
 * When real invitations exist, render an iframe / link for `design.demoUrl`
 * instead of the placeholder panel below.
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
      <DialogContent className="max-w-lg gap-0 rounded-sm border-border bg-ivory p-0">
        {design ? (
          <>
            <div className="relative">
              <img
                src={design.image}
                alt={design.alt}
                width={1008}
                height={1264}
                className="h-56 w-full object-cover"
              />
              <div className="absolute inset-0 bg-burgundy-deep/45" aria-hidden="true" />
              <p className="eyebrow absolute bottom-4 left-6 text-gold">
                {design.category}
              </p>
            </div>
            <div className="p-6 sm:p-7">
              <DialogHeader className="space-y-3 text-left">
                <DialogTitle className="font-serif text-2xl text-burgundy-deep">
                  {design.name}
                </DialogTitle>
                <DialogDescription className="text-[0.9rem] leading-relaxed text-muted-foreground">
                  {design.description}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6 rounded-sm border border-dashed border-gold/50 bg-ivory-deep/60 px-5 py-6 text-center">
                <p className="eyebrow text-burgundy-soft">დემო</p>
                <p className="mt-2.5 text-[0.875rem] leading-relaxed text-ink/70">
                  სრული ინტერაქტიული დემო მალე დაემატება — აქ გაიხსნება ამ დიზაინის
                  ცოცხალი მოსაწვევი.
                </p>
              </div>

              <FestaButton onClick={onClose} className="mt-6 w-full">
                დახურვა
              </FestaButton>
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
