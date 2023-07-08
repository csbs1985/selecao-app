import 'package:flutter/material.dart';
import 'package:selecao_app/button/icone_button.dart';

class VoltarAppbar extends StatelessWidget implements PreferredSizeWidget {
  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);

  const VoltarAppbar({
    super.key,
    required String texto,
  }) : _texto = texto;

  final String _texto;

  @override
  Widget build(BuildContext context) {
    return AppBar(
      leading: IconeButton(
        callback: () => Navigator.of(context).pop(),
        icone: Icons.arrow_circle_left_outlined,
      ),
      title: Text(
        _texto,
        style: Theme.of(context).textTheme.titleLarge,
      ),
    );
  }
}
