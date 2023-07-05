import 'package:flutter/material.dart';
import 'package:selecao_app/theme/ui_cor.dart';

class PrimeiroButton extends StatefulWidget {
  const PrimeiroButton({
    super.key,
    required Function callback,
  }) : _callback = callback;

  final Function _callback;

  @override
  State<PrimeiroButton> createState() => _ItemMenuWidgetState();
}

class _ItemMenuWidgetState extends State<PrimeiroButton> {
  bool isPressed = false;

  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.sizeOf(context).width;
    final size = width / 5;

    return GestureDetector(
      onTapDown: (_) => setState(() => isPressed = true),
      onTapUp: (_) => setState(() => isPressed = false),
      onTapCancel: () => setState(() => isPressed = false),
      onTap: () => widget._callback(),
      child: Container(
        width: size,
        height: size,
        color: const Color(0xFFC8F51B),
        child: Center(
          child: Icon(
            isPressed
                ? Icons.arrow_circle_right
                : Icons.arrow_circle_right_outlined,
            size: 48,
            color: UiCor.iconeInicio,
          ),
        ),
      ),
    );
  }
}
