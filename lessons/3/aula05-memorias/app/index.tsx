import { useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CartaoMemoria } from "../components/CartaoMemoria";
import { MEMORIAS } from "../src/dominio";

export default function Index() {
  const [idSelecionada, setIdSelecionada] = useState<number | null>(null);
  const [filtroAtivo, setFiltroAtivo] = useState(false);
  const memoriaSelecionada = MEMORIAS.find((memoria) => memoria.id === idSelecionada);

  function alternarSelecao(id: number): void {
    setIdSelecionada((idAtual) => (idAtual === id ? null : id));
  }

  function alternarFiltro(): void {
    setFiltroAtivo((estadoAtual) => !estadoAtual);
  }

  return (
    <SafeAreaView style={styles.tela}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        <View style={styles.cabecalho}>
          <View style={styles.cabecalhoLinha}>
            <Image
              accessibilityRole="image"
              accessibilityLabel="Painel didático da permanência estudantil"
              source={require("../assets/images/arquivo-didatico.png")}
              style={styles.imagemPainel}
            />

            <Pressable
              onPress={alternarFiltro}
              accessible={true}
              accessibilityRole="button"
              accessibilityLabel="Filtrar memórias"
              accessibilityHint="Alterna a visualização das memórias"
              style={({ pressed }) => [styles.filtroBotao, pressed && styles.filtroBotaoPressed]}
            >
              <Text style={styles.filtroTexto}>{filtroAtivo ? "Filtrando" : "Filtrar"}</Text>
            </Pressable>
          </View>
        </View>

        <Text style={styles.marca}>IFMA · PROTÓTIPO DIDÁTICO</Text>
        <Text style={styles.titulo}>Memórias Quilombolas</Text>
        <Text style={styles.introducao}>Selecione um registro fictício para visualizar seus detalhes.</Text>

        <View style={styles.lista}>
          {MEMORIAS.map((memoria) => (
            <CartaoMemoria
              key={memoria.id}
              memoria={memoria}
              selecionada={memoria.id === idSelecionada}
              aoSelecionar={alternarSelecao}
            />
          ))}
        </View>

        <View style={styles.estadoContainer}>
          <Text style={styles.estadoRotulo}>Estado da seleção</Text>
          {memoriaSelecionada ? (
            <View style={styles.detalhes}>
              <Text style={styles.rotulo}>MEMÓRIA SELECIONADA</Text>
              <Text style={styles.tituloDetalhes}>{memoriaSelecionada.titulo}</Text>
              <Text style={styles.texto}>{memoriaSelecionada.resumo}</Text>
            </View>
          ) : (
            <Text style={styles.vazio}>Nenhuma memória selecionada.</Text>
          )}
        </View>

        <Text style={styles.aviso}>DADOS FICTÍCIOS · Não representam comunidades ou acontecimentos reais.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: "#F8FAFC" },
  conteudo: { padding: 20, paddingBottom: 36, width: "100%", maxWidth: 720, alignSelf: "center" },
  cabecalho: { width: "100%", marginBottom: 16 },
  cabecalhoLinha: { flexDirection: "row", alignItems: "center", gap: 12, justifyContent: "space-between" },
  imagemPainel: { width: 280, height: 140, resizeMode: "contain", borderRadius: 20, alignSelf: "center" },
  filtroBotao: {
    backgroundColor: "#166534",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    minWidth: 48,
    minHeight: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  filtroBotaoPressed: { backgroundColor: "#14532D", opacity: 0.85 },
  filtroTexto: { color: "#FFFFFF", fontSize: 14, fontWeight: "700" },
  marca: { color: "#991B1B", fontSize: 12, fontWeight: "700" },
  titulo: { color: "#166534", fontSize: 30, fontWeight: "800", marginTop: 6 },
  introducao: { color: "#334155", fontSize: 16, lineHeight: 23, marginTop: 8 },
  lista: { marginTop: 20 },
  estadoContainer: { backgroundColor: "#EEF2F6", borderRadius: 12, padding: 14, marginTop: 12, borderWidth: 1, borderColor: "#CBD5E1" },
  estadoRotulo: { color: "#334155", fontSize: 12, fontWeight: "800", letterSpacing: 1 },
  detalhes: { backgroundColor: "#166534", borderRadius: 12, marginTop: 8, padding: 18 },
  rotulo: { color: "#DCFCE7", fontSize: 12, fontWeight: "700" },
  tituloDetalhes: { color: "#FFFFFF", fontSize: 20, fontWeight: "800", marginTop: 5 },
  texto: { color: "#F0FDF4", fontSize: 15, lineHeight: 22, marginTop: 8 },
  vazio: { color: "#475569", fontSize: 15, marginTop: 10, textAlign: "center" },
  aviso: { color: "#475569", fontSize: 12, lineHeight: 18, marginTop: 20, textAlign: "center" },
});
