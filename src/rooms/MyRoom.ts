import { Room, Client } from "@colyseus/core";
import { MyRoomState } from "./schema/MyRoomState";

export class MyRoom extends Room<MyRoomState> {
  maxClients = 4;

  getChunk(client: Client) {
    const blockEntities = {
        '4934': 'https://gn5hc-liaaa-aaaag-qbj5q-cai.raw.ic0.app/?type=thumbnail&tokenid=zyhhj-rqkor-uwiaa-aaaaa-buakp-maqca-aaagd-a',
        '9798': 'https://gn5hc-liaaa-aaaag-qbj5q-cai.raw.ic0.app/?type=thumbnail&tokenid=zyhhj-rqkor-uwiaa-aaaaa-buakp-maqca-aaagd-a',
        '14150': 'https://gn5hc-liaaa-aaaag-qbj5q-cai.raw.ic0.app/?type=thumbnail&tokenid=zyhhj-rqkor-uwiaa-aaaaa-buakp-maqca-aaagd-a',
        '18758': 'https://gn5hc-liaaa-aaaag-qbj5q-cai.raw.ic0.app/?type=thumbnail&tokenid=tlich-3ykor-uwiaa-aaaaa-buakp-maqca-aaafy-a',
        '23340': 'https://gll5o-xyaaa-aaaag-qbcma-cai.raw.ic0.app/?type=thumbnail&tokenid=y7ehb-jikor-uwiaa-aaaaa-buait-aaqca-aaaam-q',
        '23342': 'https://gll5o-xyaaa-aaaag-qbcma-cai.raw.ic0.app/?type=thumbnail&tokenid=ebyf3-iqkor-uwiaa-aaaaa-buait-aaqca-aaaal-q',
        '23622': 'https://gn5hc-liaaa-aaaag-qbj5q-cai.raw.ic0.app/?type=thumbnail&tokenid=tlich-3ykor-uwiaa-aaaaa-buakp-maqca-aaafy-a'
      }
      client.send("chunk", blockEntities);
  }

  onCreate (options: any) {
    this.setState(new MyRoomState());

    this.onMessage("get_chunk", (client, message) => {
      this.getChunk(client);
    });
  }

  onJoin (client: Client, options: any) {
    console.log(client.sessionId, "joined!");
  }

  onLeave (client: Client, consented: boolean) {
    console.log(client.sessionId, "left!");
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }

}
