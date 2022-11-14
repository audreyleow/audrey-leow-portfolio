import React from "react";
import { items } from "./data";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import testimage from "../../public/nodeflair1.png";

type CardDetails = {
  id: string;
  title: string;
  role: string;
  theme: string;
};

function Card({ id, title, role, theme }: Partial<CardDetails>) {
  return (
    <li className={`card ${theme}`}>
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <Image className="card-image" src={testimage} alt="test-image" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{role}</span>
            <h2>{title}</h2>
          </motion.div>
        </motion.div>
      </div>
      <Link href={"/work_experience/" + id} className={`card-open-link`} />
    </li>
  );
}

export function List({ selectedId }: { selectedId: string }) {
  return (
    <ul className="card-list">
      {items.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </ul>
  );
}
