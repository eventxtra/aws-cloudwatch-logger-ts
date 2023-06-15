export class Logger {
  constructor(params: {
    logGroupName: string;
    logStreamName: string;
    region: string;
    accessKeyId: string;
    secretAccessKey: string;
    uploadFreq: number;
    local: boolean;
  });
  log(...messagesOrRecords: Array<string | Record<string, any>>): void;
}

export function createLogStream(
  logStreamName: string,
  config: {
    logGroupName: string;
    region: string;
    accessKeyId: string;
    secretAccessKey: string;
    local: boolean;
  }
): Promise<void>;
