import 'package:go_router/go_router.dart';
import 'package:selecao_app/class/routes_class.dart';
import 'package:selecao_app/page/inicio_page.dart';
import 'package:selecao_app/page/placar_page.dart';
import 'package:selecao_app/page/selecionar_page.dart';
import 'package:selecao_app/page/splash_page.dart';
import 'package:selecao_app/page/times_page.dart';

final GoRouter routes = GoRouter(
  debugLogDiagnostics: true,
  initialLocation: RoutesEnum.INICIO.value,
  routes: [
    GoRoute(
      path: RoutesEnum.SELECIONAR.value,
      pageBuilder: (context, state) => transicaoPaginas(
        context: context,
        state: state,
        child: const SelecionarPage(),
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
    GoRoute(
      path: RoutesEnum.TIMES.value,
      pageBuilder: (context, state) => transicaoPaginas(
        context: context,
        state: state,
        child: const TimesPage(),
      ),
    ),
  ],
);
