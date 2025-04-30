// lib/neo4j.ts
import neo4j from 'neo4j-driver';

const driver = neo4j.driver(
  'bolt://localhost:7687',
  neo4j.auth.basic('neo4j', '0000')  // ← 비밀번호는 당신이 설정한 것으로
);

export default driver;
