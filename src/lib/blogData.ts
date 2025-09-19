export type Post = {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  image?: string;
  date?: string;
};

export const POSTS: Post[] = [
  {
    id: 'post-1',
    title: 'Why Artificial Intelligence is the Future of Career Opportunities in India',
    excerpt: 'AI is reshaping industries — learn why students in India should start now and how careers in AI pay off.',
    content: ``,
  image: '1.png',
    date: '2025-09-08'
  },
  {
    id: 'post-2',
    title: 'Blockchain Technology – The Next Big Revolution in the Digital World',
    excerpt: 'Beyond crypto: how blockchain secures data, improves transparency, and creates new job roles.',
    content: `Blockchain is a decentralized ledger that guarantees security and transparency. Its applications span far beyond cryptocurrency — supply-chain verification, secure identity, tamper-proof records, and more.

Why learn blockchain? Companies need experts who can architect secure systems: Blockchain Developers, Smart Contract Engineers, and Consultants who can translate business needs into decentralized solutions. The technology reduces intermediaries, speeds up settlements, and increases trust.

Practical learning — building smart contracts, testing in simulated networks, and integrating with frontend applications — makes a developer valuable immediately. Skill Code.AI focuses on hands-on blockchain labs so students graduate with deployable skills.

Join the blockchain revolution and build systems that power the digital economy.`,
  image: '2.png',
    date: '2025-09-08'
  },
  {
    id: 'post-3',
    title: 'Cyber Security – Protecting the Digital World & Building Your Career',
    excerpt: 'Cyber threats are growing — become a proactive defender and build a high-demand career in cyber security.',
    content: `As technology becomes more central to everything we do, the surface for cyber attacks grows. Cyber security professionals defend data, prevent breaches, and build resilient systems for organizations.

Roles like Ethical Hacker, Security Analyst, and Penetration Tester are crucial across industries. The cyber security market is huge and salaries in India range widely — often starting at ₹5 LPA and going much higher with specialization.

Learning cyber security involves hands-on labs, real-world attack simulations, and building defensive tooling. Graduates from hands-on programs get placed quickly because practical experience is scarce but highly valued.

If protecting systems excites you, this field offers mission-driven work and strong career prospects.`,
  image: '3.png',
    date: '2025-09-08'
  },
  {
    id: 'post-4',
    title: 'Student Success Stories – How Skill Code.AI Transforms Careers',
    excerpt: 'Real students, real outcomes — examples of career transformations after applied training.',
    content: `Success stories show the power of applied learning. Take Rohan Patel: he started with zero coding experience and is now a Machine Learning Engineer at a leading firm after completing practical projects and internships.

Priya Shah transitioned into cyber security and now works as a Certified Ethical Hacker, protecting enterprise systems. Amit Mehta learned blockchain development and launched a startup offering secure supply chain solutions.

These transformations share common themes: focused mentorship, project-based learning, and career support. Skill Code.AI combines these elements to help students land meaningful roles.

If you want results (not just certificates), follow a curriculum that emphasizes projects, mentorship, and placement support.`,
  image: '4.png',
    date: '2025-09-08'
  },
  {
    id: 'post-5',
    title: 'How to Choose the Right Institute for AI & ML Courses',
    excerpt: 'A checklist to pick an institute that will actually prepare you for a job in AI and ML.',
    content: `Choosing the right institute matters. Look for these five signals: up-to-date curriculum, experienced faculty, hands-on training, placement support, and verified student outcomes.

Hands-on matters most: live projects, real datasets, and code reviews accelerate learning. Also check whether instructors are industry practitioners — that makes the difference for job-readiness.

Ask for alumni outcomes and sample projects. The right institute will show real student projects and placement stories, not just marketing content.

Skill Code.AI focuses on industry-aligned curricula and placement support so learners build usable skills and clear career paths.`,
  image: '5.png',
    date: '2025-09-08'
  }
];
