export interface SpeakingEngagement {
  title: string;
  event: string;
  date: string;
  location: string;
  href?: string;
}

// No confirmed engagements yet. See CONTENT_TODO.md.
export const speakingEngagements: SpeakingEngagement[] = [];
