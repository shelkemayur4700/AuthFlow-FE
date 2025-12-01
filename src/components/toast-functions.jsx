import { toast } from "sonner";

// Toast styling configurations
const toastStyles = {
  success: {
    background: "rgb(34, 197, 94)", // Green-500
    color: "white",
    border: "1px solid rgb(34, 197, 94)",
  },
  error: {
    background: "rgb(239, 68, 68)", // Red-500 (destructive)
    color: "white",
    border: "1px solid rgb(239, 68, 68)",
  },
  warning: {
    background: "rgb(245, 158, 11)", // Amber-500 (yellow)
    color: "white",
    border: "1px solid rgb(245, 158, 11)",
  },
  info: {
    background: "rgb(59, 130, 246)", // Blue-500
    color: "white",
    border: "1px solid rgb(59, 130, 246)",
  },
};

export const showSuccessToast = (message) => {
  toast.success(message, {
    style: toastStyles.success,
  });
};

export const showErrorToast = (message) => {
  toast.error(message, {
    style: toastStyles.error,
  });
};

export const showWarningToast = (message) => {
  toast.warning(message, {
    style: toastStyles.warning,
  });
};

export const showInfoToast = (message) => {
  toast.info(message, {
    style: toastStyles.info,
  });
};

// Export the styles for custom usage
export { toastStyles };
