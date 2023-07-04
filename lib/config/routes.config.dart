import 'package:go_router/go_router.dart';
import 'package:selecao_app/class/routes_class.dart';
import 'package:selecao_app/page/inicio_page.dart';
import 'package:selecao_app/page/placar_page.dart';
import 'package:selecao_app/page/selecao_page.dart';
import 'package:selecao_app/page/splash_page.dart';

final GoRouter routes = GoRouter(
  debugLogDiagnostics: true,
  initialLocation: RoutesEnum.INICIO.value,
  routes: [
    GoRoute(
      path: RoutesEnum.SELECIONAR.value,
      pageBuilder: (context, state) => transicaoPaginas(
        context: context,
        state: state,
        child: const SelecaoPage(),
      ),
    ),
    GoRoute(
      path: RoutesEnum.PLACAR.value,
      pageBuilder: (context, state) => transicaoPaginas(
        context: context,
        state: state,
        child: const PlacarPage(),
      ),
    ),
    GoRoute(
      path: RoutesEnum.INICIO.value,
      pageBuilder: (context, state) => transicaoPaginas(
        context: context,
        state: state,
        child: const InicioPage(),
      ),
    ),
    GoRoute(
      path: RoutesEnum.SPLASH.value,
      pageBuilder: (context, state) => transicaoPaginas(
        context: context,
        state: state,
        child: const SplashPage(),
      ),
    ),
  ],
);
