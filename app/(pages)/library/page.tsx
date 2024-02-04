import Footer from "@/components/footer";
import LibraryText from "@/components/libraryText";
import React from "react";

export default function library() {
  return (
    <div className="flex flex-col bg-secondary">
      <div className="relative  w-11/12 h-[800px] top-20 overflow-scroll max-h-min no-scrollbar ">
        <h1 className="text-2xl m-3 ml-10">
        Ihre gespeicherte Eingabeaufforderung finden Sie hier...
        </h1>
        <h1 className="text-xl m-3 ml-10">
        Aktivieren oder löschen Sie Ihre gespeicherte Eingabeaufforderung über die nebenstehende Schaltfläche
        </h1>
        <h2 className="text-xl m-3 ml-10">
          Aktivieren oder löschen Sie Ihren gespeicherten Suchanfragen über die
          Schaltfläche. Die Suchanfrage wird entweder gelöscht oder auf der
          Hauptseite eingefügt und dargestellt.
        </h2>
        <div className="flex flex-col justify-center items-center ml-2 border-x-2  p-3  rounded-xl">
          <LibraryText content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, cupiditate vitae, id possimus tenetur corrupti itaque ratione voluptas eius Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
          <LibraryText content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, cupiditate vitae, id possimus tenetur corrupti itaque ratione voluptas eius Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
          <LibraryText content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, cupiditate vitae, id possimus tenetur corrupti itaque ratione voluptas eius Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
          <LibraryText content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, cupiditate vitae, id possimus tenetur corrupti itaque ratione voluptas eius Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
          <LibraryText content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, cupiditate vitae, id possimus tenetur corrupti itaque ratione voluptas eius Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
          <LibraryText content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, cupiditate vitae, id possimus tenetur corrupti itaque ratione voluptas eius Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
          <LibraryText content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, cupiditate vitae, id possimus tenetur corrupti itaque ratione voluptas eius Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
          <LibraryText content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, cupiditate vitae, id possimus tenetur corrupti itaque ratione voluptas eius Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
          <LibraryText content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, cupiditate vitae, id possimus tenetur corrupti itaque ratione voluptas eius Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
          <LibraryText content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, cupiditate vitae, id possimus tenetur corrupti itaque ratione voluptas eius Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
          <LibraryText content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, cupiditate vitae, id possimus tenetur corrupti itaque ratione voluptas eius Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
        </div>
      </div>
      <div className="relative mt-5 float-end top-16 rounded-lg ">
        <Footer />
      </div>
    </div>
  );
}
