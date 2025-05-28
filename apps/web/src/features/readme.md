# FSD
Какие фичи нужны на странице NewScanPage:

1. Scanner
- Компонент с камерой
- Предпросмотр фото
- Кнопка загрузить из галереи
- Должна быть кнопка "Ввести состав вручную"
- Селект: тип товара (еда, косметика и тд (В будущем будем поддерживать другие типы товаров))
- Отправляет запрос на создание скана по нажатию на кнопку (тригерится из контекста)
- (Кнопка находится в navigation и при нажатии на нее вызывается функция из контекста)
- При отправке картинки на сервер, обновляет прогресс 0-100% в сторе

2. AnalysisLoader   
- Показывает прогресс загрузки фотографии на сервер
- Следит за статусом сканирования из стора в entities/scan 
- Показывает лоадер, если статус сканирования в процессе
- Логика для минимального времени показа каждого из статусов
- Геймификация путём смешных иконок и подписей для каждой стадии 
  (можно добавить подсказки, как в играх во время загрузки
   или интересные факты по теме)
- Показывает ошибку, если она произошла
- Визуально можно сделать в виде блюра фона + в центре лоадер (как в альфабанке)

3. ScanResult
- Показывает результат сканирования
- Возможно, стоит сделать в виде дива, который 
  в NewScanPage будет встроен в BottomSheet, 
  а на странице ScanPage (в истории) или в выпадающем меню в истории сканирования
  будет просто отдельным компонентом
- В зависимости от размера относительно экрана (половина высоты или больше)
  будет по-разному отображать результат
- Вверху - название товара, которое можно поменять
- Состав в виде оригинального распознанного текста,
  но ингредиенты, которые были распознаны, заменяются на название из бд.
  Каждый ингредиент будет в прямоугольнике, как теги в соц.сетях
  (либо он при клике на него будет в прямоугольник обводиться)
  На каждый ингредиент можно нажать, рядом появится крестик, чтобы его удалить.
  Либо курсор рядом ставить, чтобы можно было стереть ингредиент
  (как на stack overflow в ключевых словах)
  Ну, в общем идея такая, чтобы была возможность редактирования состава.
- После редактирования и нажатия на кнопку "Сохранить",
  отправится запрос на повторный анализ состава
- Будет показываться компонент с индексом вредности
- Будет показываться список добавок 
- Можно добавить блок с описанием пищевой ценности
- Блок с алергенами
- И какой-нибудь дисклеймер
 

Widgets:
- scan-result
- navigation

Features:
- photo-scanner
- manual-scanner
- change-scanner-mode
- change-scan-type
- ?manual-scanner
- analysis-loader
- editable-composition
- scan-result

Entities:
- scan (ui: scan card(for scan history), HarmIndexView, NutritionalValueBlock, AllergenBlock, ScanDisclaimer )
- ingredient (ui: ingredient card)
- user

src/
├── widgets/
│   ├── navigation/
│   │   └── ui/Navigation.tsx       # Глобальная навигация (может содержать кнопку "Сканировать", инициирующую процесс на ScannerPage)
│   └── scan-result/
│       └── ui/ScanResultDetails.tsx # Виджет, отображающий полную информацию о результате скана. Используется на ScannerPage и scan-history/[scanId].tsx
│
├── features/
        
│   ├── photo-scanner/ # Фича для получения данных скана через изображение
│   │   ├── ui/
│   │   │   ├── CameraView/index.tsx             # UI для работы с камерой
│   │   │   ├── PhotoPreview/index.tsx           # UI для предпросмотра фото
│   │   │   ├── UploadFromGalleryButton/index.tsx # UI для выбора фото из галереи
│   │   │   └── ProductTypeSelect/index.tsx      # Упрощенный селект типа продукта (еда/косметика), опции из shared/config
│   │   └── model/
│   │       └── imageScannerStore.ts             # (Опционально) Локальный MobX store для состояния этой фичи, если нужно
│   ├── manual-scanner/ # Фича для ручного ввода состава
│   │   ├── ui/
│   │   │   ├── ManualInputForm/index.tsx        # UI формы для ручного ввода состава
│   │   │   └── ProductTypeSelect/index.tsx      # Тот же или аналогичный ProductTypeSelect
│   │   └── model/
│   │       └── manualInputStore.ts              # (Опционально) Локальный MobX store
│   ├── analysis-loader/ # Фича отображения процесса анализа (остается без существенных изменений)
│   │   ├── ui/
│   │   │   ├── AnalysisLoaderLayout/index.tsx
│   │   │   ├── UploadProgressBar/index.tsx
│   │   │   ├── ScanningStatusDisplay/index.tsx
│   │   │   └── AnalysisErrorDisplay/index.tsx
│   │   ├── model/
│   │   │   └── useAnalysisStatus.ts
│   │   └── config/
│   │       └── gamificationMessages.ts
│   ├── scan-result-display/ # Фича для отображения различных частей результата скана
│   │   ├── ui/
│   │   │   ├── EditableProductName/index.tsx    # Редактируемое имя продукта
│   │   │   ├── HarmIndexView/index.tsx          # Отображение индекса вредности из scan.analysis
│   │   │   ├── NutritionalValueBlock/index.tsx  # Отображение пищевой ценности из scan
│   │   │   ├── AllergenBlock/index.tsx          # Отображение аллергенов из scan.analysis
│   │   │   └── ScanDisclaimer/index.tsx
│   │   └── model/
│   │       └── useUpdateProductName.ts          # Мутация для обновления имени продукта
│   ├── editable-composition/ # Фича редактирования распознанного состава
│   │   ├── ui/
│   │   │   ├── EditableCompositionText/index.tsx # Текст состава с интерактивными тегами ингредиентов
│   │   │   ├── EditableIngredientTag/index.tsx   # Редактируемый тег ингредиента
│   │   │   └── SaveChangesCompositionButton/index.tsx # Кнопка "Сохранить" для переанализа
│   │   └── model/
│   │       └── useReanalyzeComposition.ts       # Мутация для повторного анализа состава
│
├── entities/
│   ├── scan/
│   │   ├── model/
│   │   │   ├── scanStore.ts       # MobX стор: управляет общим состоянием процесса сканирования на ScannerPage (активный способ ввода, временные данные: pendingImage, pendingManualComposition, pendingProductType; статус загрузки/анализа: scanStatus, uploadProgress; текущий результат: currentScanResult)
│   │   │   ├── types.ts           # Интерфейсы Scan, ScanAnalysis, NutritionalValue. ProductType может быть строковым литералом или enum (например, 'food' | 'cosmetics').
│   │   │   ├── useScanMutations.ts # React Query мутации: useCreateScan (может принимать разные типы данных в зависимости от способа ввода), useReanalyzeComposition (может быть здесь или в features/editable-composition/model)
│   │   │   └── useScanQueries.ts  # React Query хуки: useScanById, useScanHistoryList
│   │   ├── ui/
│   │   │   ├── ScanCard/index.tsx     # UI-компонент для отображения скана в списке истории
│   │   │   └── ScanStatusIcon/index.tsx
│   │   └── api/
│   │       └── scanApi.ts         # Функции API: createScan, fetchScanById, и т.д.
│   ├── ingredient/
│   │   ├── model/
│   │   │   ├── types.ts           # Тип Ingredient (id, name, description, harmfulnessRating, etc.)
│   │   │   └── useIngredientQueries.ts # Хуки для получения данных по ингредиенту (например, useIngredientDetailsById для IngredientCard)
│   │   ├── ui/
│   │   │   ├── IngredientTagDisplay/index.tsx # Простой тег для отображения в составе
│   │   │   └── IngredientCard/index.tsx     # Детальная карточка с описанием ингредиента
│   │   └── api/
│   │       └── ingredientApi.ts   # API для получения детальной информации об ингредиентах
│   └── user/ # Сущность "Пользователь" (если нужна аутентификация, пользовательские настройки и т.д.)
│       ├── model/ # (userStore.ts, types.ts)
│       └── api/   # (authApi.ts, userApi.ts)
│
└── shared/
├── api/
│   ├── index.ts             # Настройка экземпляра axios
│   └── reactQueryClient.ts  # Настройка React Query клиента
├── config/
│   └── appConfig.ts         # Конфигурация приложения, например: export const PRODUCT_TYPES = [{ value: 'food', label: 'Еда' }, { value: 'cosmetics', label: 'Косметика' }];
├── lib/                     # Хелперы, утилиты
│   ├── hooks/               # Общие кастомные хуки
│   └── utils/
├── ui/                      # Общий UI-кит (Button, Input, Modal, и т.д.)
│   ├── Icon/
│   └── /* ... другие компоненты UI-кита */
├── assets/                  # Статические ассеты (иконки, изображения)
└── store/                   # Настройка глобального MobX (провайдеры, если нужны)
└── StoreProvider.tsx