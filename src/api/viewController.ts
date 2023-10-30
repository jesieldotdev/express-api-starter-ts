import { MusicProps, NoteProps } from "../models/models";

const viewController = () => {
  let notesList = [
    {
      id: 1,
      body: "Começar na academia",
      status: false,
    },
    {
      id: 2,
      body: "Ler um livro",
      status: false,
    },
  ];

  let musicsList = [
    {
      title: "Grande amore",
      artist: "Il Volo",
    },
    {
      title: "Eres Todo Para Mi",
      artist: "Petra Berger",
    },
    {
      title: "Finna Vivencita",
      artist: "Petra Berger",
    },
  ];

  class Music {
    static getMusics(getMusics: any) {
      throw new Error("Method not implemented.");
    }
    title: string;
    artist: string;
    setStatus: any;

    constructor({ title, artist, status, setStatus }: MusicProps) {
      this.title = title;
      this.artist = artist;
      this.setStatus = status;
    }

    getMusics() {
      return musicsList;
    }

    status() {
      return this.setStatus;
    }

    save() {
      const exists = musicsList.filter((msc) => msc.title === this.title);
      console.log(exists);
      if (!!exists.length) {
        this.setStatus = false;
      } else {
        musicsList.push({
          title: this.title,
          artist: this.artist,
        });
        this.setStatus = true;
      }
    }
  }

  class Note {

    id: number;
    body: string;
    status: any | boolean;
      static save: any;

    constructor({ id, body, status }: NoteProps) {
      this.id = id;
      this.body = body;
      this.status = status;
    }

    getNotes() {
      return notesList;
    }


    save() {
      const exists = notesList.filter((note) => note.id === this.id);
      console.log(exists);
      if (!!exists.length) {
      } else {
        notesList.push({
          id: this.id,
          body: this.body,
          status: this.status,
        });

      }
    }
  }

  return {
    musicsList,
    notesList,
    Music,
    Note
  };
};

export default viewController;
