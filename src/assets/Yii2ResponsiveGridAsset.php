<?php

namespace riinseresuto\grid\assets;

use yii\web\AssetBundle;

class Yii2ResponsiveGridAsset extends AssetBundle
{
    public $sourcePath = '@riinseresuto/grid/assets/public';

    public $css = [
        'css/app.styles.css',
    ];

    public $js = [
        'js/app.bundle.js',
    ];

    public $depends = [
        'yii\web\YiiAsset',
        'yii\grid\GridViewAsset',
    ];

    public $publishOptions = [
        'forceCopy' => YII_DEBUG,
    ];
}
