<?php

namespace App\Observers;

use App\Models\ExtensionRequest;

class ExtensionRequestObserver
{
    /**
     * Handle the ExtensionRequest "created" event.
     */
    public function created(ExtensionRequest $extensionRequest): void
    {

    }

    /**
     * Handle the ExtensionRequest "updated" event.
     */
    public function updated(ExtensionRequest $extensionRequest): void
    {
        //
    }

    /**
     * Handle the ExtensionRequest "deleted" event.
     */
    public function deleted(ExtensionRequest $extensionRequest): void
    {
        //
    }

    /**
     * Handle the ExtensionRequest "restored" event.
     */
    public function restored(ExtensionRequest $extensionRequest): void
    {
        //
    }

    /**
     * Handle the ExtensionRequest "force deleted" event.
     */
    public function forceDeleted(ExtensionRequest $extensionRequest): void
    {
        //
    }
}
