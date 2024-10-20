set windows-shell := ["powershell.exe", "-c"]
set dotenv-filename := ".env.local"

# Install Shadcn component
shad +component_name:
  pnpm dlx shadcn@latest add {{component_name}}

# Development
dev:
  pnpm dev

build:
  pnpm build

start:
  pnpm start

# Full build
prod-start:
  pnpm build
  pnpm start

format:
  pnpm prettier --write .