import 'package:flutter/material.dart';
import 'package:selecao_app/config/string_config.dart';

class InfoSelecionarWidget extends StatefulWidget {
  const InfoSelecionarWidget({
    super.key,
    required bool isToggle,
  }) : _isToggle = isToggle;

  final bool _isToggle;

  @override
  State<InfoSelecionarWidget> createState() => _InfoSelecionarWidgetState();
}

class _InfoSelecionarWidgetState extends State<InfoSelecionarWidget>
    with SingleTickerProviderStateMixin {
  AnimationController? _animationController;
  Animation<double>? _animation;

  double _height = 0;

  @override
  void initState() {
    super.initState();
    _animationController = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 300),
    );
    _animation = CurvedAnimation(
      parent: _animationController!,
      curve: Curves.easeInOut,
    );
    _toggleExpandedState();
  }

  void _toggleExpandedState() {
    widget._isToggle
        ? _animationController!.forward()
        : _animationController!.reverse();
  }

  @override
  void dispose() {
    _animationController!.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    _height = MediaQuery.sizeOf(context).height;

    return AnimatedContainer(
      color: Colors.red,
      curve: Curves.easeInOut,
      duration: const Duration(milliseconds: 300),
      height: widget._isToggle ? 200 : 0,
      padding: const EdgeInsets.all(16),
      child: Center(
        child: Text(
          SELECIONAR_DESCRICAO,
          style: Theme.of(context).textTheme.displayMedium,
        ),
      ),
    );
  }
}
