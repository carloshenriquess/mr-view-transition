interface ModernDocument extends Document {
  startViewTransition?: (callback?: () => unknown) => unknown;
}

export const DOCUMENT: ModernDocument = document;
