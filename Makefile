s:
	git add .
	commit-emoji
	git push origin develop

exec-backend:
	docker exec -it mark1 /bin/bash
