"use client"

// * * This is just a demostration of delete modal, actual functionality may vary

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog";
  import { TaskType } from "@/lib/validations/schema";
  import { Button } from "@/components/ui/button";
  
  type DeleteProps = {
    task: TaskType;
    isOpen: boolean;
    showActionToggle: (open: boolean) => void;
  };
  
  export default function DeleteDialog({
    task,
    isOpen,
    showActionToggle,
  }: DeleteProps) {
    return (
      <AlertDialog open={isOpen} onOpenChange={showActionToggle}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure absolutely sure ?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. You are about to delete Task
              Details of <b>{task.title}</b>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <Button
              variant='destructive'
              onClick={() => {
                showActionToggle(false);
              }}
            >
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }