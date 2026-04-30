mise-task task:
	mise r {{task}}

setup:
	mise x -- aube i
	cd backend && npm i

start-backend:
	cd backend && npm start

start-frontend:
	mise r dev
