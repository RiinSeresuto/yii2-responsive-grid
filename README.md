# Yii2 Responsive Grid

## Install

```bash
composer require "riinseresuto/yii2-responsive-grid:dev-main"
```

## Use

```php
use riinseresuto\grid\Yii2ResponsiveGrid;

echo Yii2ResponsiveGrid::widget([
    'dataProvider' => $dataProvider,
    'layout' => "{items}\n{pager}\n{summary}",
    'columns' => [
        'first_name',
        'last_name',
        'email:email',
        [
            'attribute' => 'phone',
            'contentOptions' => function ($model, $key, $index, $column) {
                return [
                    'data-label' => $model->getAttributeLabel($column->attribute),
                ];
            },
        ],
        [
            'class' => ActionColumn::class,
            // 'headerOptions' => [
            //     'data-control' => 'true',
            // ],
            'urlCreator' => function ($action, Contact $model, $key, $index, $column) {
                return Url::toRoute([$action, 'id' => $model->id]);
            }
        ],
    ],
]);
```
