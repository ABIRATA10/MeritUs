import { Scholarship } from '../types';

export const SCHOLARSHIPS: Scholarship[] = [
  {
    id: '1',
    title: 'Future Leaders in STEM Scholarship',
    provider: 'TechFuture Foundation',
    amount: '$10,000',
    deadline: '2026-05-15',
    category: 'Private',
    scope: 'Global',
    link: 'https://example.com/stem-leaders',
    eligibilityCriteria: 'Students pursuing undergraduate degrees in Computer Science, Engineering, or Mathematics. Minimum GPA 3.5.',
    description: 'Supporting the next generation of leaders in technology and engineering fields.',
    requirements: [
      'Completed Application Form',
      'Official Academic Transcripts (Minimum 3.5 GPA)',
      'Two Letters of Recommendation from STEM faculty',
      'Personal Statement (500-800 words)',
      'Proof of Enrollment in a STEM program'
    ]
  },
  {
    id: '2',
    title: 'Pragati Scholarship Scheme for Technical Education',
    provider: 'AICTE (Government of India)',
    amount: '₹50,000 per annum',
    deadline: '2026-12-31',
    category: 'Government',
    scope: 'National',
    link: 'https://www.aicte-india.org/schemes/students-development-schemes/pragati-scholarship-scheme',
    eligibilityCriteria: 'Students admitted to first year of Degree/Diploma level course in AICTE approved institution. Family income less than 8 Lakh per annum.',
    description: 'A government initiative to provide financial assistance to students pursuing technical education.',
    requirements: [
      'Aadhaar Card',
      'Income Certificate (issued by competent authority)',
      '10th and 12th Marksheets',
      'Admission Letter from AICTE approved institution',
      'Bank Passbook (for Direct Benefit Transfer)'
    ]
  },
  {
    id: '3',
    title: 'The Adobe Research Technology Scholarship',
    provider: 'Adobe',
    amount: '$25,000',
    deadline: '2026-11-01',
    category: 'Private',
    scope: 'Global',
    link: 'https://research.adobe.com/scholarships/',
    eligibilityCriteria: 'Students globally who are currently enrolled as full-time undergraduate or master\'s students at a university. Must be majoring in computer science, computer engineering, or a related technical field.',
    description: 'Recognizing outstanding undergraduate and master\'s students in computer science.',
    requirements: [
      'Resume / CV',
      'Academic Transcripts',
      'Three Letters of Recommendation',
      'Answers to 4 short essay questions',
      'Optional: Link to portfolio or GitHub'
    ]
  },
  {
    id: '4',
    title: 'Post Graduate Indira Gandhi Scholarship for Single Parents',
    provider: 'UGC (Government of India)',
    amount: '₹36,200 per annum',
    deadline: '2026-10-30',
    category: 'Government',
    scope: 'National',
    link: 'https://www.ugc.ac.in/sgc/',
    eligibilityCriteria: 'Single parents who have taken admission in regular, full-time first year Master\'s degree course in any designated university or a postgraduate college.',
    description: 'Supporting higher education for single parents.'
  },
  {
    id: '5',
    title: 'Google Conference and Travel Scholarships',
    provider: 'Google',
    amount: 'Approx. $3,000',
    deadline: 'Rolling',
    category: 'Private',
    scope: 'Global',
    link: 'https://buildyourfuture.withgoogle.com/scholarships/google-conference-scholarships/',
    eligibilityCriteria: 'Underrepresented groups in computer science or related fields. Must be a student or professional in the field.',
    description: 'Helping underrepresented groups attend major tech conferences.'
  },
  {
    id: '6',
    title: 'Global Science Fellowship',
    provider: 'Global Science Foundation',
    amount: '€15,000 - €60,000',
    deadline: 'Varies by region',
    category: 'Private',
    scope: 'Global',
    link: 'https://www.globalscience.com/',
    eligibilityCriteria: 'PhD students or Post-doctoral researchers in Life Sciences, Physical Sciences, Engineering, and Mathematics.',
    description: 'Promoting the participation of researchers in science around the world.'
  },
  {
    id: '7',
    title: 'Society of Engineering Students Scholarships',
    provider: 'SES',
    amount: '$1,000 - $15,000',
    deadline: '2026-03-31',
    category: 'Private',
    scope: 'Global',
    link: 'https://scholarships.ses.org/',
    eligibilityCriteria: 'Students pursuing ABET-accredited baccalaureate or graduate programs in preparation for careers in engineering, engineering technology, and computer science.',
    description: 'Financial support for students pursuing engineering and technology degrees.'
  },
  {
    id: '8',
    title: 'Begum Hazrat Mahal National Scholarship',
    provider: 'Ministry of Minority Affairs (India)',
    amount: 'Up to ₹12,000',
    deadline: '2026-09-30',
    category: 'Government',
    scope: 'National',
    link: 'https://scholarships.gov.in/',
    eligibilityCriteria: 'Students belonging to minority communities (Muslims, Christians, Sikhs, Buddhists, Jains, Parsis). Studying in Class 9th to 12th. Minimum 50% marks in previous class. Family income below 2 Lakh.',
    description: 'Empowering minority students through financial aid for school education.'
  },
  {
    id: '9',
    title: 'Career Foundation Scholarship',
    provider: 'Education First',
    amount: '₹25,000 - ₹50,000',
    deadline: '2026-12-15',
    category: 'Private',
    scope: 'National',
    link: 'https://www.careerfoundation.in/',
    eligibilityCriteria: 'Students aged 15-30 years. Minimum 60% marks in 10th and 12th. Family income less than 6 Lakh per annum.',
    description: 'Supporting students to pursue higher education and vocational training.'
  },
  {
    id: '10',
    title: 'International Fellowships',
    provider: 'Global Education Foundation',
    amount: '$20,000 - $50,000',
    deadline: '2026-11-15',
    category: 'Private',
    scope: 'Global',
    link: 'https://www.globaled.org/resources/programs/fellowships-grants/current-opportunities/international/',
    eligibilityCriteria: 'Students who are not U.S. citizens or permanent residents. Pursuing full-time graduate or postdoctoral study in the U.S.',
    description: 'One of the world\'s largest sources of funding for graduate students.'
  },
  {
    id: '11',
    title: 'Tata Housing Scholarships for Meritorious Students',
    provider: 'Tata Housing',
    amount: 'Up to ₹60,000',
    deadline: '2026-04-30',
    category: 'Private',
    scope: 'National',
    link: 'https://www.tatahousing.in/csr/',
    eligibilityCriteria: 'Students pursuing 2nd year of B.Tech/B.Arch in civil engineering or architecture. Minimum 50% marks.',
    description: 'Supporting students in construction and architecture fields.'
  },
  {
    id: '12',
    title: 'State Merit Scholarship',
    provider: 'Department of Higher Education',
    amount: '₹10,000 per annum',
    deadline: '2026-08-31',
    category: 'Government',
    scope: 'State',
    link: 'https://example.com/state-merit',
    eligibilityCriteria: 'Students who are residents of the state and have secured more than 80% in Class 12.',
    description: 'Rewarding academic excellence for students within the state.'
  }
];
