<?php

namespace Drupal\drupal_and_react\Plugin\Field\FieldFormatter;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\FormatterBase;
use Drupal\Core\Field\FieldDefinitionInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Plugin implementation of the 'Drupal and React' formatter.
 *
 * @FieldFormatter(
 *   id = "drupal_and_react",
 *   label = @Translation("Drupal and React"),
 *   field_types = {
 *     "string"
 *   }
 * )
 */
class ReactTextFormatter extends FormatterBase {

  /**
   * {@inheritdoc}
   */
  public static function defaultSettings() {
    return parent::defaultSettings();
  }

  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    $elements = [];
    $id = $items->getEntity()->id();
    $wrapper_id = 'drupal-and-react-app-' . $id;

    $build = [
      '#markup' => '<div id="' . $wrapper_id . '"></div>',
    ];

    foreach ($items as $delta => $item) {
      $elements[$delta] = $item->value;
    }

    $build['#attached']['library'] = [
      'drupal_and_react/app_bundle',
    ];

    $build['#attached']['drupalSettings']['drupal_and_react_app'][$id] = [
      'id' => $id,
      'wrapper' => $wrapper_id,
      'content' => $elements,
    ];

    return $build;
  }

  /**
   * {@inheritdoc}
   */
  public static function isApplicable(FieldDefinitionInterface $field_definition) {
    if ( $field_definition->getTargetBundle() === 'map' ) {
      return TRUE;
    }

    return True;
  }

}
