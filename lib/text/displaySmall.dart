import 'package:flutter/material.dart';

class DisplaySmall extends StatelessWidget {
  const DisplaySmall({
    super.key,
    required String texto,
  }) : _texto = texto;

  final String _texto;

  @override
  Widget build(BuildContext context) {
    return Text(
      _texto,
      style: Theme.of(context).textTheme.displaySmall,
    );
  }
}
