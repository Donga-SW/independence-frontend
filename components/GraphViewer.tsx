'use client';

import { useEffect } from "react";
import Graph from "graphology";
import type { Attributes } from "graphology-types"; // ✅ 타입 import
import driver from "@/lib/neo4j";

export default function GraphViewer() {
  useEffect(() => {
    const loadGraph = async () => {
      const Sigma = (await import("sigma")).default;

      const graph = new Graph<Attributes, Attributes, Attributes>(); // ✅ 타입 지정

      const session = driver.session();
      const result = await session.run(`
        MATCH (n)-[r]->(m)
        WHERE any(label IN labels(n) WHERE label IN ['인물', '사건', '죄목', '판결날짜']) AND
              any(label IN labels(m) WHERE label IN ['인물', '사건', '죄목', '판결날짜'])
        RETURN n, r, m
      `);

      result.records.forEach((record) => {
        const n = record.get("n");
        const m = record.get("m");
        const r = record.get("r");

        const addNode = (node: {
          identity: { toString(): string };
          labels: string[];
          properties: { name: string };
        }) => {
          const id = node.identity.toString();
          const label = node.properties.name;
          const type = node.labels[0];
          let color = "#4f46e5";

          if (type === "인물") color = "#f59e0b";
          else if (type === "사건") color = "#10b981";
          else if (type === "죄목") color = "#ef4444";
          else if (type === "판결날짜") color = "#3b82f6";

          if (!graph.hasNode(id)) {
            graph.addNode(id, {
              label,
              x: Math.random() * 100,
              y: Math.random() * 100,
              size: 10,
              color,
            });
          }
        };

        addNode(n);
        addNode(m);

        const from = n.identity.toString();
        const to = m.identity.toString();
        const edgeId = `${from}->${to}`;

        if (!graph.hasEdge(edgeId)) {
          graph.addEdge(from, to, {
            label: r.type,
            color: "#9ca3af",
          });
        }
      });

      const container = document.getElementById("graph-container");
      if (container) {
        new Sigma(graph, container, {
          renderLabels: true,
          labelColor: { color: "black" },
          defaultNodeColor: "#4f46e5",
          defaultEdgeColor: "#9ca3af",
        });
      }

      await session.close();
    };

    if (typeof window !== "undefined") {
      loadGraph();
    }
  }, []);

  return <div id="graph-container" className="w-full h-[90vh] bg-white" />;
}