export interface Analysis {
    range: [number, number];
    name: string;
    icon: string;
    selected: boolean;
  }

  export const authenticityAnalysis: Analysis[] = [
    { range: [0.2, Infinity], name: 'Authentic', icon: 'check-circle-f', selected: true },
    { range: [-0.5, 0.2], name: 'Neutral Authenticity', icon: 'rings', selected: false },
    { range: [-Infinity, -0.5], name: 'Fake', icon: 'exclamation-mark-triangle-f', selected: false },
    { range: [-Infinity, Infinity], name: 'Unknown', icon: 'question', selected: false },
  ];

  export const sentimentAnalysis: Analysis[] = [
    { range: [0.3, Infinity], name: 'Positive', icon: 'check-circle-f', selected: true },
    { range: [0, 0.3], name: 'Slightly Positive', icon: 'rings', selected: false },
    { range: [-0.5, 0], name: 'Slightly Negative', icon: 'rings', selected: false },
    { range: [-Infinity, -0.5], name: 'Negative', icon: 'exclamation-mark-triangle-f', selected: false },
    { range: [-Infinity, Infinity], name: 'Unknown', icon: 'question', selected: false },
  ];

  export const toxicityAnalysis: Analysis[] = [
    { range: [0.2, Infinity], name: 'OK', icon: 'check-circle-f', selected: false },
    { range: [-0.5, 0.2], name: 'Neutral', icon: 'rings', selected: true },
    { range: [-Infinity, -0.5], name: 'Toxic', icon: 'exclamation-mark-triangle-f', selected: false },
    { range: [-Infinity, Infinity], name: 'Unknown', icon: 'question', selected: false },
  ];


  export function getAnalysisConfiguration(name: string): Analysis[] {
    switch (name) {
      case 'authenticity':
        return authenticityAnalysis;
      case 'sentiment':
        return sentimentAnalysis;
      case 'toxicity':
        return toxicityAnalysis;
      default:
        return [];
    }
  }
  export function getAnalysisValue(value: number, analysis: Analysis[]): Analysis {
    for (const item of analysis) {
      if (value > item.range[0] && value <= item.range[1]) {
        return item;
      }
    }
    return analysis[analysis.length - 1];
  }
