export interface Host {
  download: string
  host: string
  upload: string
}

export interface Protocol {
  download: string
  protocol: string
  upload: string
}

export interface ProcessData {
  download: string
  download_speed: string
  upload: string
  upload_speed: string
  host_traffic: Host[]
  last_time_update: string
  name: string
  pid: number
  protocol_traffic: Protocol[]
}
