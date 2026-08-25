import { motion } from "framer-motion";
import { whatsappHref } from "@/config/site";

export default function WhatsAppWidget() {
  return (
    <motion.a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl sm:bottom-8 sm:right-8"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
      <svg viewBox="0 0 32 32" className="relative h-7 w-7 fill-current">
        <path d="M16.03 3C9.4 3 4 8.36 4 14.96c0 2.24.62 4.33 1.68 6.13L4 29l8.13-1.63a12.9 12.9 0 0 0 3.9.6c6.63 0 12.03-5.36 12.03-11.96S22.66 3 16.03 3zm0 21.7c-1.24 0-2.46-.24-3.6-.7l-.26-.1-4.83.97.97-4.7-.17-.27a9.62 9.62 0 0 1-1.5-5.14c0-5.36 4.4-9.72 9.8-9.72 5.4 0 9.8 4.36 9.8 9.72 0 5.37-4.4 9.74-9.8 9.74zm5.36-7.3c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.63.08-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.14.3-.34.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.66-1.58-.9-2.16-.24-.57-.48-.5-.66-.5h-.56c-.2 0-.52.07-.79.37-.27.3-1.03 1-1.03 2.45s1.06 2.85 1.2 3.05c.15.2 2.1 3.2 5.1 4.48.71.31 1.27.49 1.7.63.72.23 1.36.2 1.88.12.57-.09 1.75-.71 2-1.4.24-.68.24-1.27.17-1.4-.07-.13-.27-.2-.56-.35z" />
      </svg>
    </motion.a>
  );
}
