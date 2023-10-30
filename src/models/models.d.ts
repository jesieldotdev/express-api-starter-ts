export interface MessageResponse {
  message: string;
}

export interface ErrorResponse extends MessageResponse {
  stack?: string;
}


export interface MusicProps {
    title: string
    artist: string
    status?: boolean
    setStatus?: any
}

export interface NoteProps {
    id: number
    body: string
    status?: boolean
    setStatus?: any
}

export interface musicListProps{
    [Music]
}