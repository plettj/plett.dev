import { NotesListItem } from "@/components/layouts/NotesList";
import { PATH_NOTES } from "@/lib/constants";

export const csItems: NotesListItem[] = [
  {
    title: "Machine Learning and Data Mining",
    shortTitle: "Machine Learning",
    course: { name: "02450", href: "https://kurser.dtu.dk/course/02450" },
    year: "2024",
    university: "DTU",
    summary:
      "Linear regression, PCA, classification, clustering, ensemble methods. Data processing, feature extraction, and association mining.",
    href: `${PATH_NOTES}/02450-notes.pdf`,
  },
  {
    title: "Algorithms",
    shortTitle: "Algorithms",
    course: { name: "CS 341", href: "https://uwflow.com/course/cs341" },
    year: "2024",
    university: "UW",
    summary:
      "Efficient algorithms and performant design techniques. Dynamic programming, graph search and backtrack, NP-completeness, etc.",
    href: `${PATH_NOTES}/cs341-notes.pdf`,
  },
  {
    title: "Operating Systems",
    shortTitle: "Operating Systems",
    course: { name: "CS 350", href: "https://uwflow.com/course/cs350" },
    year: "2024",
    university: "UW",
    summary:
      "Fundamentals of operating system function, design, and implementation. Processes, threads, concurrency, memory management, file systems, security, etc.",
    href: `${PATH_NOTES}/cs350-notes.pdf`,
  },
  {
    title: "Computer Organization and Design",
    shortTitle: "Digital Hardware",
    course: { name: "CS 251", href: "https://uwflow.com/course/cs251" },
    year: "2023",
    university: "UW",
    summary:
      "Computer organization and performance. Digital logic, assembly, data representation, memory hierarchies, multiprocessors, and processor design.",
    href: `${PATH_NOTES}/cs251-notes.pdf`,
  },
  {
    title: "Data Structures and Data Management",
    shortTitle: "Data Structures",
    course: { name: "CS 240", href: "https://uwflow.com/course/cs240" },
    year: "2023",
    university: "UW",
    summary:
      "Data structures, algorithms, and performance analysis. Queues, sorting, dictionaries, trees, and data structures for text processing.",
    href: `${PATH_NOTES}/cs240-notes.pdf`,
  },
  {
    title: "Logic and Computation",
    shortTitle: "Logic and Computation",
    course: { name: "CS 245", href: "https://uwflow.com/course/cs245" },
    year: "2022",
    university: "UW",
    summary:
      "(Incomplete notes) Propositional and predicate logic, formal reasoning, Godel's Incompleteness Theorem, and the limits of computation.",
    href: `${PATH_NOTES}/cs245-summary.pdf`,
  },
  {
    title: "Object-Oriented Software Development",
    shortTitle: "Methods of OOP",
    course: { name: "CS 246", href: "https://uwflow.com/course/cs246" },
    year: "2022",
    university: "UW",
    summary:
      "(Incomplete notes) Object-oriented programming, design patterns, performance, debuggers, test suites. Entails building a chess engine or similar.",
    href: `${PATH_NOTES}/cs246-summary.pdf`,
  },
  {
    title: "Digital Circuits and Systems",
    shortTitle: "Digital Circuits",
    course: { name: "ECE 124", href: "https://uwflow.com/course/ece124" },
    year: "2022",
    university: "UW",
    summary:
      "Combinatorial and sequential circuits, boolean algebra and function simplification, hardware description languages, and timing analysis.",
    href: `${PATH_NOTES}/ece124-notes.pdf`,
  },
];

export const mathItems: NotesListItem[] = [
  {
    title: "Introduction to Combinatorics",
    shortTitle: "Combinatorics",
    course: { name: "MATH 239", href: "https://uwflow.com/course/math239" },
    year: "2023",
    university: "UW",
    summary:
      "Introduction to graph theory and combinatorial analysis. Includes colourings, planarity, binary strings, plane trees, etc.",
    href: `${PATH_NOTES}/math239-notes.pdf`,
  },
  {
    title: "Calculus II for Engineers",
    shortTitle: "Multivariate Calculus",
    course: { name: "MATH 119", href: "https://uwflow.com/course/math119" },
    year: "2022",
    university: "UW",
    summary:
      "Multivariate calculus, approximation methods, infinite series, coordinate systems, line integrals, Lagrange multipliers, etc.",
    href: `${PATH_NOTES}/math119-notes.pdf`,
  },
  {
    title: "Probability",
    shortTitle: "Probability",
    course: { name: "STAT 230", href: "https://uwflow.com/course/stat230" },
    year: "2022",
    university: "UW",
    summary:
      "Introduction to probability models, the named distributions, discrete and continuous random variables, conditional probability functions, etc.",
    href: `${PATH_NOTES}/stat230-notes.pdf`,
  },
  {
    title: "Calculus I for Engineers",
    shortTitle: "Calculus I",
    course: { name: "MATH 117", href: "https://uwflow.com/course/math117" },
    year: "2021",
    university: "UW",
    summary:
      "Functions including polynomial, exponential, and logarithmic functions. Limits and continuity. Differentiation and integration.",
    href: `${PATH_NOTES}/math117-notes.pdf`,
  },
  {
    title: "Linear Algebra for Engineers",
    shortTitle: "Linear Algebra",
    course: { name: "MATH 115", href: "https://uwflow.com/course/math115" },
    year: "2021",
    university: "UW",
    summary:
      "Linear equations, matrices, determinants, and vector spaces. Eigenvalues, diagonalization, and their applications. Complex numbers.",
    href: `${PATH_NOTES}/math115-notes.pdf`,
  },
  {
    title: "Abstract Algebra",
    shortTitle: "Abstract Algebra",
    course: { name: "MATH 135", href: "https://uwflow.com/course/math135" },
    year: "2021",
    university: "UW",
    summary:
      "Proof techniques and the language of mathematics, including integers modulo n, rationals, reals, complex numbers, and polynomials.",
    href: `${PATH_NOTES}/math135-notes.pdf`,
  },
];
