import { Annotation } from "@/types";
import { Dispatch, SetStateAction } from "react";
import { Database, SqlValue } from "sql.js";

export const handleBookClick = (
  bookId: string,
  db: Database | null,
  setAnnotations: Dispatch<SetStateAction<Annotation[]>>
) => {
  if (!db) return;

  const selectedBookAnnotationsSQL = `
      SELECT
        '#' || row_number() over (partition by B.Title order by T.ContentID, T.ChapterProgress) as 'id',
        T.Text as 'content'
      FROM content AS B, bookmark AS T
      WHERE B.ContentID = T.VolumeID AND T.Text != '' AND T.Hidden = 'false'
      AND B.MimeType != 'application/x-kobo-html+pocket'
      AND B.ContentID = ?
      ORDER BY T.ContentID, T.ChapterProgress`;
  const annotationsRes = db.exec(selectedBookAnnotationsSQL, [bookId]);
  const annotations =
      annotationsRes[0]?.values.map((row: SqlValue[]) => ({
        id: row[0] as string,
        content: row[1] as string,
      })) || [];
    setAnnotations(annotations);
};