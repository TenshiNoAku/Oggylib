<?php

namespace App\Observers;

use App\Actions\URLTransliteAction;
use App\Models\Book;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Illuminate\Support\Facades\Storage;
class BookObserver
{
    /**
     * Handle the Book "created" event.
     */
    public function created(Book $book): void
    {
        $action = new URLTransliteAction;
        $transilteName = $action->handle($book->name);
        $book->update(['url'=>$transilteName]);
        $image = QrCode::format('svg')->size(250)->generate("https://Oggylib.ru/books/{$transilteName}");
        Storage::disk('local')->put("QRs/{$transilteName}.svg",$image);
    }

    /**
     * Handle the Book "updated" event.
     */
    public function updated(Book $book): void
    {
        //
    }

    /**
     * Handle the Book "deleted" event.
     */
    public function deleted(Book $book): void
    {
        //
    }

    /**
     * Handle the Book "restored" event.
     */
    public function restored(Book $book): void
    {
        //
    }

    /**
     * Handle the Book "force deleted" event.
     */
    public function forceDeleted(Book $book): void
    {
        //
    }
}
