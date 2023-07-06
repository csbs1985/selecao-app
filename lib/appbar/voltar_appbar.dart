import 'package:flutter/material.dart';
import 'package:selecao_app/button/icone_button.dart';

class VoltarAppbar extends StatelessWidget implements PreferredSizeWidget {
  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);

  const VoltarAppbar({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return AppBar(
      leading: IconeButton(
        callback: () => Navigator.of(context).pop(),
        icone: Icons.arrow_back,
      ),
    );
  }
}
