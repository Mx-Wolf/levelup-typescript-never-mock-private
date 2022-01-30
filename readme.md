# Классы и их интерфейсы

Демонстрирует поведение классов имеющих в описании приватные и защищенные поля. В нашем коде есть функция, которая использует класс настроек, и вычисляет место хранения резервной копии. Попробуем поместить эту функцию под надзор модульного тестирования

Класс `SettingsManager` делает публичными только два свойства. их и следует эмулировать во время модульного тестирования

## Публичных свойств нехватает

Когда мы обозначили публичные свойства, TypeScript все еще сообщает об ошибках. Ему нехватает `profileName` и `baseFolder`.

## Приватные свойства не эмулируются

Когда мы добавили (вроде бы) требуемые свойства, TypeScript все равно предупреждает нас о нарушении условий доступа.

Безусловно, TypeScript прав. Для эмуляции надо использовать другой подход. Один из них мы уже использовали при обсуждении минимально необходимого набора свойств для устойчивости функции. Здесь мы можем применить другой подход.

Мы предложим нашему классу реализовывать описанный публичный интерфейс и его и будем эмулировать во время модульного тестирования.

## Решение

Теперь мы обозначили публичный интерфейс явно и создаем программы (`getBackupPath`) в отношении этого интерфейса. В таком случае создавать модульные тести надежнее.
