export interface VscodeExtension {
  id: string;
  name: string;
}

export const vscodeExtensions: VscodeExtension[] = [
  { id: "esbenp.prettier-vscode", name: "Prettier" },
  { id: "dbaeumer.vscode-eslint", name: "ESLint" },
  { id: "eamodio.gitlens", name: "GitLens" },
  { id: "ms-python.python", name: "Python" },
  { id: "ms-azuretools.vscode-docker", name: "Docker" },
  { id: "bradlc.vscode-tailwindcss", name: "Tailwind CSS IntelliSense" },
];