import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:selecao_app/theme/ui_duracao.dart';

CustomTransitionPage transicaoPaginas<T>({
  required BuildContext context,
  required GoRouterState state,
  required Widget child,
}) {
  return CustomTransitionPage(
    key: state.pageKey,
    child: child,
    transitionDuration: const Duration(milliseconds: UiDuracao.transicoPagina),
    transitionsBuilder: (context, animation, secondaryAnimation, child) =>
        SlideTransition(
      position: Tween<Offset>(
        begin: const Offset(1, 0),
        end: const Offset(0, 0),
      ).animate(animation),
      child: child,
    ),
  );
}

enum RoutesEnum {
  DOAR('/doar'),
  INICIO('/inicio'),
  PLACAR('/placar'),
  SELECIONAR('/selecionar'),
  TIMES('/times');

  final String value;
  const RoutesEnum(this.value);
}
