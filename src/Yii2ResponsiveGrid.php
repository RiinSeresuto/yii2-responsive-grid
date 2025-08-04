<?php

namespace riinseresuto\grid;

use riinseresuto\grid\assets\Yii2ResponsiveGridAsset;
use yii\grid\GridView;
use yii\grid\DataColumn;

\Yii::setAlias('@riinseresuto/grid/assets/public', __DIR__ . '/assets/public');

class Yii2ResponsiveGrid extends GridView
{
    public function init()
    {
        // Set a default ID if none is provided
        if (!isset($this->options['id'])) {
            $this->options['id'] = 'tableContainer';
        }

        if ($this->layout === null) {
            $this->layout = "{items}\n{pager}\n{summary}";
        }

        $this->tableOptions['class'] = 'responsive-table';

        parent::init();
    }

    public function initColumns()
    {
        parent::initColumns();

        foreach ($this->columns as $i => $column) {
            if ($column instanceof DataColumn) {
                $existing = $column->contentOptions;

                $column->contentOptions = function ($model, $key, $index, $col) use ($existing, $i) {
                    $options = is_callable($existing)
                        ? call_user_func($existing, $model, $key, $index, $col)
                        : (is_array($existing) ? $existing : []);

                    $options['data-label'] = $model->getAttributeLabel($col->attribute ?? '');

                    if ($i === 0) {
                        $options['tabindex'] = 0;
                    }

                    return $options;
                };
            }
        }
    }

    public function run()
    {
        Yii2ResponsiveGridAsset::register($this->getView());

        $id = $this->options['id']; // e.g., 'tableContainer'

        // Register the JavaScript
        $this->getView()->registerJs(<<<JS
            function initTable() {
                new ResponsiveTable(document.getElementById('$id'));
            }

            initTable();
        JS);

        return parent::run();
    }
}
