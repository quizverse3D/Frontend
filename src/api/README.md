# API Layer

В этой папке размещаются функции для работы с внешними API или сервером.

## Рекомендации
- Разделять API по сущностям, если их много (например, userApi.js, quizApi.js).
- Не хранить здесь бизнес-логику, только вызовы API и обработку ответов. 