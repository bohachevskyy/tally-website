export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: 'Is Tally really free?',
    a: 'Yes, completely. No subscription, no trial, no in-app purchases, no ads, and every feature is included. You don’t even need an account.',
  },
  {
    q: 'Why does Tally ask for Screen Time permission?',
    a: 'Tally is built on Apple’s Screen Time framework. That permission lets it measure how long you use each app and block an app when its limit runs out. Apple’s APIs process the data on your iPhone, and it never leaves the device.',
  },
  {
    q: 'What happens when I hit a limit?',
    a: 'The app is blocked for the rest of the day. If you really need to get back in, tap the button on the block screen and give yourself a set number of extra minutes. The clock keeps running, and the override goes into your stats so you can see how often you break each rule.',
  },
  {
    q: 'Can I set different limits on different days?',
    a: 'Yes. Any rule can have its own budget for each day of the week, for example 15 minutes on workdays and an hour on weekends. Set a day to zero and the app is blocked that whole day.',
  },
  {
    q: 'Can I limit several apps with one rule?',
    a: 'Yes. A rule can cover one app or a group of apps that share a single time budget.',
  },
  {
    q: 'Do limits reset automatically?',
    a: 'Yes. Limits and any extra minutes you gave yourself reset at midnight. Set a rule once and Tally applies it every day.',
  },
  {
    q: 'Does Tally drain my battery or track me?',
    a: 'No. Tally sends nothing over the network and has no analytics or servers. iOS itself does the usage monitoring, very efficiently.',
  },
  {
    q: 'What do I need to run Tally?',
    a: 'An iPhone on iOS 17 or later.',
  },
  {
    q: 'How do I delete my data?',
    a: 'Delete the app. Your rules, usage history, and stats live only on your iPhone, so removing Tally removes all of it.',
  },
];
