export interface SpeakingEngagement {
  title: string;
  event: string;
  date: string;
  location: string;
  href?: string;
}

// No confirmed engagements yet — see CONTENT_TODO.md.
export const speakingEngagements: SpeakingEngagement[] = [];
