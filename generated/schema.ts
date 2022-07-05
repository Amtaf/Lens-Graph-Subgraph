// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Dispatcher extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Dispatcher entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Dispatcher must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Dispatcher", id.toString(), this);
    }
  }

  static load(id: string): Dispatcher | null {
    return changetype<Dispatcher | null>(store.get("Dispatcher", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get dispatcher(): Bytes {
    let value = this.get("dispatcher");
    return value!.toBytes();
  }

  set dispatcher(value: Bytes) {
    this.set("dispatcher", Value.fromBytes(value));
  }
}

export class Post extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Post entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Post must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Post", id.toString(), this);
    }
  }

  static load(id: string): Post | null {
    return changetype<Post | null>(store.get("Post", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get pubId(): string {
    let value = this.get("pubId");
    return value!.toString();
  }

  set pubId(value: string) {
    this.set("pubId", Value.fromString(value));
  }

  get contentURI(): string {
    let value = this.get("contentURI");
    return value!.toString();
  }

  set contentURI(value: string) {
    this.set("contentURI", Value.fromString(value));
  }

  get collectModule(): Bytes {
    let value = this.get("collectModule");
    return value!.toBytes();
  }

  set collectModule(value: Bytes) {
    this.set("collectModule", Value.fromBytes(value));
  }

  get referenceModule(): Bytes {
    let value = this.get("referenceModule");
    return value!.toBytes();
  }

  set referenceModule(value: Bytes) {
    this.set("referenceModule", Value.fromBytes(value));
  }

  get referenceModuleReturn(): Bytes {
    let value = this.get("referenceModuleReturn");
    return value!.toBytes();
  }

  set referenceModuleReturn(value: Bytes) {
    this.set("referenceModuleReturn", Value.fromBytes(value));
  }

  get creationTime(): i32 {
    let value = this.get("creationTime");
    return value!.toI32();
  }

  set creationTime(value: i32) {
    this.set("creationTime", Value.fromI32(value));
  }
}

export class Comment extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Comment entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Comment must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Comment", id.toString(), this);
    }
  }

  static load(id: string): Comment | null {
    return changetype<Comment | null>(store.get("Comment", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get pubId(): string {
    let value = this.get("pubId");
    return value!.toString();
  }

  set pubId(value: string) {
    this.set("pubId", Value.fromString(value));
  }

  get contentURI(): string {
    let value = this.get("contentURI");
    return value!.toString();
  }

  set contentURI(value: string) {
    this.set("contentURI", Value.fromString(value));
  }

  get profileIdPointed(): string {
    let value = this.get("profileIdPointed");
    return value!.toString();
  }

  set profileIdPointed(value: string) {
    this.set("profileIdPointed", Value.fromString(value));
  }

  get pubIdPointed(): string {
    let value = this.get("pubIdPointed");
    return value!.toString();
  }

  set pubIdPointed(value: string) {
    this.set("pubIdPointed", Value.fromString(value));
  }

  get referenceModule(): Bytes {
    let value = this.get("referenceModule");
    return value!.toBytes();
  }

  set referenceModule(value: Bytes) {
    this.set("referenceModule", Value.fromBytes(value));
  }

  get referenceModuleReturn(): Bytes {
    let value = this.get("referenceModuleReturn");
    return value!.toBytes();
  }

  set referenceModuleReturn(value: Bytes) {
    this.set("referenceModuleReturn", Value.fromBytes(value));
  }

  get creationTime(): i32 {
    let value = this.get("creationTime");
    return value!.toI32();
  }

  set creationTime(value: i32) {
    this.set("creationTime", Value.fromI32(value));
  }
}

export class Mirror extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Mirror entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Mirror must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Mirror", id.toString(), this);
    }
  }

  static load(id: string): Mirror | null {
    return changetype<Mirror | null>(store.get("Mirror", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get pubId(): string {
    let value = this.get("pubId");
    return value!.toString();
  }

  set pubId(value: string) {
    this.set("pubId", Value.fromString(value));
  }

  get contentURI(): string {
    let value = this.get("contentURI");
    return value!.toString();
  }

  set contentURI(value: string) {
    this.set("contentURI", Value.fromString(value));
  }

  get profileIdPointed(): string {
    let value = this.get("profileIdPointed");
    return value!.toString();
  }

  set profileIdPointed(value: string) {
    this.set("profileIdPointed", Value.fromString(value));
  }

  get pubIdPointed(): string {
    let value = this.get("pubIdPointed");
    return value!.toString();
  }

  set pubIdPointed(value: string) {
    this.set("pubIdPointed", Value.fromString(value));
  }

  get referenceModule(): Bytes {
    let value = this.get("referenceModule");
    return value!.toBytes();
  }

  set referenceModule(value: Bytes) {
    this.set("referenceModule", Value.fromBytes(value));
  }

  get referenceModuleReturn(): Bytes {
    let value = this.get("referenceModuleReturn");
    return value!.toBytes();
  }

  set referenceModuleReturn(value: Bytes) {
    this.set("referenceModuleReturn", Value.fromBytes(value));
  }

  get creationTime(): i32 {
    let value = this.get("creationTime");
    return value!.toI32();
  }

  set creationTime(value: i32) {
    this.set("creationTime", Value.fromI32(value));
  }
}

export class Publication extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Publication entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Publication must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Publication", id.toString(), this);
    }
  }

  static load(id: string): Publication | null {
    return changetype<Publication | null>(store.get("Publication", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get pubId(): string {
    let value = this.get("pubId");
    return value!.toString();
  }

  set pubId(value: string) {
    this.set("pubId", Value.fromString(value));
  }

  get referenceModule(): Bytes {
    let value = this.get("referenceModule");
    return value!.toBytes();
  }

  set referenceModule(value: Bytes) {
    this.set("referenceModule", Value.fromBytes(value));
  }

  get referenceModuleReturnData(): Bytes | null {
    let value = this.get("referenceModuleReturnData");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set referenceModuleReturnData(value: Bytes | null) {
    if (!value) {
      this.unset("referenceModuleReturnData");
    } else {
      this.set("referenceModuleReturnData", Value.fromBytes(<Bytes>value));
    }
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Profile extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Profile entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Profile must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Profile", id.toString(), this);
    }
  }

  static load(id: string): Profile | null {
    return changetype<Profile | null>(store.get("Profile", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (!value) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(<string>value));
    }
  }

  get bio(): string | null {
    let value = this.get("bio");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set bio(value: string | null) {
    if (!value) {
      this.unset("bio");
    } else {
      this.set("bio", Value.fromString(<string>value));
    }
  }

  get followNftAddress(): string | null {
    let value = this.get("followNftAddress");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set followNftAddress(value: string | null) {
    if (!value) {
      this.unset("followNftAddress");
    } else {
      this.set("followNftAddress", Value.fromString(<string>value));
    }
  }

  get metadata(): string | null {
    let value = this.get("metadata");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set metadata(value: string | null) {
    if (!value) {
      this.unset("metadata");
    } else {
      this.set("metadata", Value.fromString(<string>value));
    }
  }

  get handle(): string {
    let value = this.get("handle");
    return value!.toString();
  }

  set handle(value: string) {
    this.set("handle", Value.fromString(value));
  }

  get onwnedBy(): string {
    let value = this.get("onwnedBy");
    return value!.toString();
  }

  set onwnedBy(value: string) {
    this.set("onwnedBy", Value.fromString(value));
  }

  get isDefault(): boolean {
    let value = this.get("isDefault");
    return value!.toBoolean();
  }

  set isDefault(value: boolean) {
    this.set("isDefault", Value.fromBoolean(value));
  }

  get isFollowedByMe(): boolean {
    let value = this.get("isFollowedByMe");
    return value!.toBoolean();
  }

  set isFollowedByMe(value: boolean) {
    this.set("isFollowedByMe", Value.fromBoolean(value));
  }
}

export class CreateProfileData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save CreateProfileData entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type CreateProfileData must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("CreateProfileData", id.toString(), this);
    }
  }

  static load(id: string): CreateProfileData | null {
    return changetype<CreateProfileData | null>(
      store.get("CreateProfileData", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value!.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get handle(): string {
    let value = this.get("handle");
    return value!.toString();
  }

  set handle(value: string) {
    this.set("handle", Value.fromString(value));
  }

  get imageURI(): string {
    let value = this.get("imageURI");
    return value!.toString();
  }

  set imageURI(value: string) {
    this.set("imageURI", Value.fromString(value));
  }

  get followModule(): Bytes | null {
    let value = this.get("followModule");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set followModule(value: Bytes | null) {
    if (!value) {
      this.unset("followModule");
    } else {
      this.set("followModule", Value.fromBytes(<Bytes>value));
    }
  }

  get followModuleData(): Bytes | null {
    let value = this.get("followModuleData");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set followModuleData(value: Bytes | null) {
    if (!value) {
      this.unset("followModuleData");
    } else {
      this.set("followModuleData", Value.fromBytes(<Bytes>value));
    }
  }

  get followNftURI(): string | null {
    let value = this.get("followNftURI");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set followNftURI(value: string | null) {
    if (!value) {
      this.unset("followNftURI");
    } else {
      this.set("followNftURI", Value.fromString(<string>value));
    }
  }
}

export class Follow extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Follow entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Follow must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Follow", id.toString(), this);
    }
  }

  static load(id: string): Follow | null {
    return changetype<Follow | null>(store.get("Follow", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get fromAccount(): string | null {
    let value = this.get("fromAccount");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set fromAccount(value: string | null) {
    if (!value) {
      this.unset("fromAccount");
    } else {
      this.set("fromAccount", Value.fromString(<string>value));
    }
  }

  get fromProfileSTR(): string | null {
    let value = this.get("fromProfileSTR");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set fromProfileSTR(value: string | null) {
    if (!value) {
      this.unset("fromProfileSTR");
    } else {
      this.set("fromProfileSTR", Value.fromString(<string>value));
    }
  }

  get toProfile(): Array<string> | null {
    let value = this.get("toProfile");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set toProfile(value: Array<string> | null) {
    if (!value) {
      this.unset("toProfile");
    } else {
      this.set("toProfile", Value.fromStringArray(<Array<string>>value));
    }
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class FollowNFTTransferred extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save FollowNFTTransferred entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type FollowNFTTransferred must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("FollowNFTTransferred", id.toString(), this);
    }
  }

  static load(id: string): FollowNFTTransferred | null {
    return changetype<FollowNFTTransferred | null>(
      store.get("FollowNFTTransferred", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get profileId(): BigInt | null {
    let value = this.get("profileId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set profileId(value: BigInt | null) {
    if (!value) {
      this.unset("profileId");
    } else {
      this.set("profileId", Value.fromBigInt(<BigInt>value));
    }
  }

  get followNFTID(): BigInt | null {
    let value = this.get("followNFTID");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set followNFTID(value: BigInt | null) {
    if (!value) {
      this.unset("followNFTID");
    } else {
      this.set("followNFTID", Value.fromBigInt(<BigInt>value));
    }
  }

  get from(): Bytes | null {
    let value = this.get("from");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set from(value: Bytes | null) {
    if (!value) {
      this.unset("from");
    } else {
      this.set("from", Value.fromBytes(<Bytes>value));
    }
  }

  get to(): Bytes | null {
    let value = this.get("to");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set to(value: Bytes | null) {
    if (!value) {
      this.unset("to");
    } else {
      this.set("to", Value.fromBytes(<Bytes>value));
    }
  }

  get timestamp(): BigInt | null {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt | null) {
    if (!value) {
      this.unset("timestamp");
    } else {
      this.set("timestamp", Value.fromBigInt(<BigInt>value));
    }
  }

  get data(): string | null {
    let value = this.get("data");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set data(value: string | null) {
    if (!value) {
      this.unset("data");
    } else {
      this.set("data", Value.fromString(<string>value));
    }
  }
}
