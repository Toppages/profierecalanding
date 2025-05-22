import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { LucideIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
    details?: string;
  } | null;
}

export function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  if (!service) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, phone, message } = formData;
    const whatsappNumber = "584122359283";
    const text = `Hola mi nombre es  ${name}, quiero información sobre el servicio *${service?.title}*.\n\n ${email}\n (${phone})\n  ${message}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");

    setIsSubmitting(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
    onClose();
  };

  const Content = (
    <div className="grid gap-4">
      <div className="flex items-center gap-3 mb-2">
        <div className={`p-2 rounded-full bg-${service.color}/20`}>
          <service.icon className={`h-6 w-6 ${service.color}`} />
        </div>
        <h3 className="text-2xl font-bold">{service.title}</h3>
      </div>

      <p className="text-base text-muted-foreground">{service.description}</p>

      {service.details && (
        <div>
          <h4 className="font-medium mb-2">Detalles del servicio:</h4>
          <p className="text-muted-foreground">{service.details}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="border-t pt-4 space-y-4">
        <h3 className="text-lg font-medium">Solicita información sobre este servicio</h3>

        <Input name="name" placeholder="Tu nombre" value={formData.name} onChange={handleInputChange} required />
        <Input name="email" type="email" placeholder="tu@email.com" value={formData.email} onChange={handleInputChange} required />
        <Input name="phone" placeholder="Tu número de teléfono" value={formData.phone} onChange={handleInputChange} required />
        <Textarea name="message" placeholder="Describe tus necesidades" value={formData.message} onChange={handleInputChange} required />

        <DialogFooter className="mt-4">
          <Button variant="outline" type="button" onClick={onClose}>Cancelar</Button>
          <Button type="submit" className="bg-fire text-white" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar solicitud"}
          </Button>
        </DialogFooter>
      </form>
    </div>
  );

  return isMobile ? (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="bottom" className="h-[90vh] overflow-y-auto">
        <SheetHeader className="text-left">
          <SheetTitle>{service.title}</SheetTitle>
          <SheetDescription>{service.description}</SheetDescription>
        </SheetHeader>
        <div className="py-4">{Content}</div>
      </SheetContent>
    </Sheet>
  ) : (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>{service.title}</DialogTitle>
          <DialogDescription>{service.description}</DialogDescription>
        </DialogHeader>
        {Content}
      </DialogContent>
    </Dialog>
  );
}
