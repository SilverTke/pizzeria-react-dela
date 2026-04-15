mise-task task:
	mise r {{task}}

setup:
	mise x -- pnpm i
	cd backend && npm i

start-backend:
	cd backend && npm start

start-frontend:
	mise r dev
