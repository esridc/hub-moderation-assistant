export interface Analysis {
    range: [number, number];
    name: string;
    icon: string;
  }

  export const authenticityAnalysis: Analysis[] = [
    { range: [0.2, Infinity], name: 'Authentic', icon: 'check-circle-f' },
    { range: [-0.5, 0.2], name: 'Neutral Authenticity', icon: 'rings' },
    { range: [-Infinity, -0.5], name: 'Fake', icon: 'exclamation-mark-triangle-f' },
    { range: [-Infinity, Infinity], name: 'Unknown', icon: 'question' },
  ];

  export const sentimentAnalysis: Analysis[] = [
    { range: [0.3, Infinity], name: 'Positive', icon: 'check-circle-f' },
    { range: [0, 0.3], name: 'Slightly Positive', icon: 'rings' },
    { range: [-0.5, 0], name: 'Slightly Negative', icon: 'rings' },
    { range: [-Infinity, -0.5], name: 'Negative', icon: 'exclamation-mark-triangle-f' },
    { range: [-Infinity, Infinity], name: 'Unknown', icon: 'question' },
  ];

  export const toxicityAnalysis: Analysis[] = [
    { range: [0.2, Infinity], name: 'OK', icon: 'check-circle-f' },
    { range: [-0.5, 0.2], name: 'Neutral', icon: 'rings' },
    { range: [-Infinity, -0.5], name: 'Toxic', icon: 'exclamation-mark-triangle-f' },
    { range: [-Infinity, Infinity], name: 'Unknown', icon: 'question' },
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
