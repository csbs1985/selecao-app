import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:selecao_app/model/menu_model.dart';
import 'package:selecao_app/theme/ui_cor.dart';

class ItemMenuWidget extends StatefulWidget {
  const ItemMenuWidget({
    super.key,
    required MenuModel item,
  }) : _item = item;

  final MenuModel _item;

  @override
  State<ItemMenuWidget> createState() => _ItemMenuWidgetState();
}

class _ItemMenuWidgetState extends State<ItemMenuWidget> {
  bool isPressed = false;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTapDown: (_) => setState(() => isPressed = true),
      onTapUp: (_) => setState(() => isPressed = false),
      onTapCancel: () => setState(() => isPressed = false),
      onTap: () => context.push(widget._item.rota),
      child: Row(
        children: [
          Text(
            widget._item.texto,
            style: const TextStyle(
              color: UiCor.inicio,
              fontSize: 40,
              fontWeight: FontWeight.bold,
            ),
          ),
          const SizedBox(width: 16),
          Icon(
            isPressed
                ? Icons.arrow_circle_right
                : Icons.arrow_circle_right_outlined,
            size: 48,
            color: UiCor.inicio,
          ),
        ],
      ),
    );
  }
}
