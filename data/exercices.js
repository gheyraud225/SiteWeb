

const exercices = [
  {
    titre: "Singular Matrix (Exam FS25)",
    type: "determinant",
    difficulte: 2,
    texte: "Consider the matrix: <br> $$ A = \\begin{pmatrix} 1 & 0 & 2 \\\\ 2 & a & 1 \\\\ 1 & 1 & 1 \\end{pmatrix} $$ Find the unique value of $a$ such that $\\det(A) = 0$.",
    reponses: [
      { nom: "a", valeur: 3 }
    ]
  },
  {
    titre: "Eigenvalue Multiplicity (Exam FS24)",
    type: "valeurs_propres",
    difficulte: 2,
    texte: "Find the unique value $x \\in \\mathbb{R}$ such that the matrix $$ \\begin{pmatrix} 2 & 2 \\\\ x & 2 \\end{pmatrix} $$ has exactly one real eigenvalue (and no other eigenvalues).",
    reponses: [
      { nom: "x", valeur: 0 }
    ]
  },
  {
    titre: "Determinant 3x3 (Assignment 11)",
    type: "determinant",
    difficulte: 1,
    texte: "Calculate the determinant of the matrix $B$: $$ B = \\begin{pmatrix} 1 & 2 & -3 \\\\ 2 & 6 & 0 \\\\ -1 & -2 & 2 \\end{pmatrix} $$",
    reponses: [
      { nom: "\\det(B)", valeur: -2 }
    ]
  },
  {
    titre: "Eigenvalues of a Reflection (Assignment 12)",
    type: "valeurs_propres",
    difficulte: 1,
    texte: "Let $A \\in \\mathbb{R}^{2 \\times 2}$ be such that $$ A \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} y \\\\ x \\end{pmatrix} $$ for all $x, y \\in \\mathbb{R}$. Find its two real eigenvalues $\\lambda_1$ and $\\lambda_2$ (with $\\lambda_1 > \\lambda_2$).",
    reponses: [
      { nom: "\\lambda_1", valeur: 1 },
      { nom: "\\lambda_2", valeur: -1 }
    ]
  },
  {
    titre: "Dimension of a Subspace (Assignment 6)",
    type: "espace_vectoriel",
    difficulte: 2,
    texte: "Consider the three polynomials $p, q, r \\in \\mathbb{R}[x]$ defined as: $$ p = x^3 + x, \\quad q = x^2 + 1, \\quad r = x^2 + x + 1 $$ What is the dimension of $\\text{Span}(p, q, r)$?",
    reponses: [
      { nom: "\\dim", valeur: 3 }
    ]
  }
];